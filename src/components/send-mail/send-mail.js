import React from "react";
import "./send-mail.css";

const SendMailIcon = () => {
  return (
    <span class="frame">
      {/* <input type="checkbox" id="cb" /> */}
      {/* <label for="cb" class="button feedback">
          Send mail
        </label>
        <label for="cb" class="button reset">
          Reset
        </label> */}
      {/* <div class="circle"></div>
        <div class="circle-outer"></div> */}

      {/* <svg class="icon mail">
          <polyline points="119,1 119,69 1,69 1,1"></polyline>
          <polyline points="119,1 60,45 1,1 119,1"></polyline>
          </svg> */}
      <input type="checkbox" id="cb" />

      {/* <svg class="icon mail">
        <polyline points="39,1 39,13 1,13 1,1"></polyline>
        <polyline points="39,1 20,13 1,1 39,1"></polyline>
      </svg> */}

      {/* <svg class="icon plane">
          <polyline points="119,1 1,59 106,80 119,1"></polyline>
          <polyline points="119,1 40,67 43,105 69,73"></polyline>
        </svg> */}
      <svg class="icon plane">
        <polyline points="39,1 1,12 26,20 39,1"></polyline>
        <polyline points="39,1 10,14 11,26 14,18"></polyline>
      </svg>

      <label for="cb" class="feedback">
        Send feedback
      </label>
    </span>
  );
};
export default SendMailIcon;
