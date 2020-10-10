import React from "react";
import InterestSelector from "./interest-selector";
import "./interest-selector.css";

const handleHobbySelect = (selectedItems) => {
  console.log(selectedItems);
  //const temp = selectedItems.map((item) => item.id);
  //setFieldValue("hobbies", temp.length > 0 ? temp : []);
};

function itemToString(item) {
  return item && item.value ? item.value : "";
}

const InteretstForm = () => (
  <div id="edit">
    <div class="interests">
      <section id="edit-personal-info" class="profile-form">
        <h1>Interests</h1>
        <hr />
        <form>
          <div class="account-field">
            <InterestSelector
              itemToString={itemToString}
              labelText="Select your Hobbies:"
              onSelectionItemsChange={handleHobbySelect}
            />
          </div>

          <button
            data-css-867vqf=""
            class="saveButton"
            data-ui="savePersonalInfo"
          >
            <span data-css-15b13by="">Save interests</span>
          </button>
        </form>
      </section>
    </div>
  </div>
);

export default InteretstForm;
