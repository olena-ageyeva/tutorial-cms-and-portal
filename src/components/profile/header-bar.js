import React from "react";

const HeaderBar = ({ name }) => {
  return (
    <div class="header">
      <div class="header-bar">
        <div class="avatar">
          <div class="avatarImage">
            <div data-css-1h1qs66>{name[0]}</div>
          </div>
        </div>
        <div class="headingAndButtons">
          <h1>{name}</h1>
          <button data-css-2jepz4="">
            <div data-css-y80vay="">
              <div data-css-7dab2f="">
                <svg aria-label="more icon" viewBox="0 0 24 24" role="img">
                  <path d="M6 14.5a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </div>
            </div>
            <span data-css-15b13by=""></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
