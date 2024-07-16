import React from "react";
import "./services.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Services() {
  useGSAP(() => {
    gsap.from(".niggro", { x: 50 }), gsap.from(".niggra", { x: -50 }), gsap.from(".niggrao", { y: -50 });
  }, []);

  return (
    <div class="ag-format-container" id="ser">
      <div class="ag-courses_box ">
        <div class="ag-courses_item niggra">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Content Assistant Chatbot</div>
            <ul classname="nigga">
              <li className="linigga">✅ 1. Grammar/Syntax Correction</li>
              <li className="linigga">✅ 2. Style and Tone Suggestions</li>
              <li className="linigga">✅ 3. Content Structure Analysis</li>
              <li className="linigga">✅ 4. Plagiarism Checker</li>
              <li className="linigga">✅ 5. Custom Templates</li>
            </ul>
            <div class="ag-courses-item_date-box">
              Cost :<span class="ag-courses-item_date">2500 $</span>
            </div>
          </a>
        </div>

        <div class="ag-courses_item niggrao">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Customer Support Chatbot</div>
            <ul classname="nigga1">
              <li className="linigga">✅ 1. 24/7 Availability</li>
              <li className="linigga">✅ 2. FAQ Handling</li>
              <li className="linigga">✅ 3. Customizable</li>
              <li className="linigga">✅ 4. Multiple platforms</li>
              <li className="linigga">✅ 5. Feedback Collection</li>
            </ul>
            <div class="ag-courses-item_date-box">
              Cost :<span class="ag-courses-item_date">3000 $</span>
            </div>
          </a>
        </div>

        <div class="ag-courses_item niggro">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">Persona Chatbot</div>
            <ul classname="nigga">
              <li className="linigga">✅ 1. Personalized Conversations</li>
              <li className="linigga">✅ 2. Multi-Language Support</li>
              <li className="linigga">✅ 3. Contextual Awareness</li>
              <li className="linigga">✅ 4. Emotional Intelligence</li>
              <li className="linigga">✅ 5. Customizable Personalities</li>
            </ul>
            <div class="ag-courses-item_date-box">
              Cost :<span class="ag-courses-item_date">2000 $</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
