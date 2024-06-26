import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: formData.amount
        }
      }]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Submit form data to Formspree
      submitToFormspree();
    });
  };

  const submitToFormspree = async () => {
    try {
      const response = await fetch('https://formspree.io/f/xknddyaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          amount: ''
        });
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount (USD)"
          required
        />
      </form>
      
      <PayPalScriptProvider options={{ 'client-id': 'AdUYjKKJtnqCjxzoMCNwNLN3rMZOFBmEqlaGJRp_5slWwGwifwvavPyrUman561g62baMusZFvhE5-hV' }}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaymentForm;
