import React from "react";

const LearningStats = () => {
  return (
    <>
      <div class="stats">
        <div>
          <h2 data-css-xhd98s="">Activity insights</h2>
          <button
            class="privacyToggle locked"
            aria-label="Activity insights is hidden"
            aria-pressed="false"
          >
            <span class="SVGInline">
              <svg
                class="SVGInline-svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g class="closed">
                  <path d="m12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16c.57-.23 1.18-.36 1.83-.36zm-10-2.73 2.28 2.28.46.46c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 2.93 2.92 1.27-1.27-17.73-17.73zm5.53 5.53 1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"></path>
                </g>

                <g class="open">
                  <path d="m12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
        <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
          <div
            style={{
              background: `url(${
                photoURL ||
                "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
              })  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px",
            }}
            className="border border-blue-300"
          ></div>
          <div className="md:pl-4">
            <h2 className="text-2xl font-semibold">{displayName}</h2>
            <h3 className="italic">{email}</h3>
          </div>
        </div>
        <button
          className="w-full py-3 bg-red-600 mt-4 text-white"
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default LearningStats;
