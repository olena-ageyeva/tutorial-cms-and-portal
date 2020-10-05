import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import firebase, { auth, generateUserDocument } from "../../firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);
  //const user = auth.currentUser;

  const {
    displayName,
    email,
    title,
    employer,
    fullname,
    town,
    websiteUrl,
  } = user;

  //   useEffect(() => {
  //     if (auth.currentUser != user) {
  //       user = auth.currentUser;
  //     }
  //   }, [auth]);

  const [name, setName] = useState(fullname);
  const [nickname, setNickName] = useState(displayName);
  const [jobTitle, setJobTitle] = useState(title || "Developer");
  const [company, setCompany] = useState(employer || "EBSCO-IS");

  const [location, setLocation] = useState(town || "Ipswich, MA");
  const [website, setWebsite] = useState(websiteUrl);
  const [error, setError] = useState(null);

  const updateProfileHandler = async (event) => {
    event.preventDefault();
    try {
      var currentUser = firebase.auth().currentUser;

      var updatedUser = await generateUserDocument(currentUser, {
        displayName: nickname,
        title: jobTitle,
        fullname: name,
        employer: company,
        town: location,
        websiteUrl: website,
      }).then(() => {
        console.log(
          "success update",
          auth.currentUser,
          displayName,
          jobTitle,
          name,
          company
        );
      });
    } catch (error) {
      console.log("error", error);
      setError("Error");
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "nickname":
        setNickName(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "website":
        setWebsite(value);
        break;
      default:
        break;
    }
  };

  return (
    <div class="profile">
      <div class="header">
        <div class="header-bar">
          <div class="avatar">
            <div class="avatarImage">
              <div data-css-1h1qs66>
                {(nickname && nickname[0]) || (email && email[0])}
              </div>
            </div>
          </div>
          <div class="headingAndButtons">
            <h1>{fullname || nickname || "Anonimous"}</h1>
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
      <div class="headerContentWrapper">
        <div class="headerContent">
          <ul class="dotted"></ul>
          <ul data-css-1mfvpjq="" class="socialIcons"></ul>
          <ul data-css-tb5q9j class="dotted">
            <li>
              <strong>1</strong>{" "}
              <a href="/profile/interests?returnUrl=/profile" data-css-di03rb>
                Interest
              </a>
              <button
                class="privacyToggle locked"
                aria-label="1 following is hidden"
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
            </li>

            <li>
              <strong>0</strong>{" "}
              <a
                href="/profile/interests/knowledge?returnUrl=/profile"
                data-css-di03rb
              >
                Knowledge areas
              </a>
              <button
                class="privacyToggle locked"
                aria-label="0 following is hidden"
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
            </li>
            <li>
              <strong>5/10</strong>{" "}
              <a href="/profile/interests?returnUrl=/profile" data-css-di03rb>
                Activity Insight
              </a>
              <button
                class="privacyToggle locked"
                aria-label="1 following is hidden"
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
            </li>
            <li>
              <strong>80%</strong>{" "}
              <a href="/profile/interests?returnUrl=/profile" data-css-di03rb>
                Profile Info
              </a>
              <button
                class="privacyToggle locked"
                aria-label="1 following is hidden"
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
            </li>
          </ul>
        </div>
      </div>
      <div id="edit">
        <div class="container">
          <section id="edit-personal-info" class="profile-form">
            <h1>Personal info</h1>
            <hr />
            <form>
              <div class="account-field">
                <div class="input-field field">
                  <label>Name</label>
                  <div>
                    <input
                      name="name"
                      type="text"
                      value={name}
                      placeholder="Your name"
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>
                <div class="input-field field">
                  <label class="">Nickname</label>
                  <div>
                    <input
                      name="nickname"
                      id="nickname"
                      placeholder="How would you like to be called?"
                      type="text"
                      value={nickname}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>
              </div>

              <div class="account-field">
                <div class="input-field field">
                  <label class="">Job title</label>
                  <div>
                    <input
                      name="jobTitle"
                      type="text"
                      id="jobTitle"
                      value={jobTitle}
                      placeholder="Developer"
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>

                <div class="input-field field">
                  <label class="">Company name</label>
                  <div>
                    <input
                      name="company"
                      id="company"
                      type="text"
                      value={company}
                      placeholder="EBSCO-IS"
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>
              </div>
              <div class="account-field">
                <div class="input-field field">
                  <label class="">Location</label>
                  <div>
                    <input
                      name="location"
                      id="location"
                      type="text"
                      value={location}
                      placeholder="Ipswich, MA"
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>

                <div class="input-field field">
                  <label class="">Personal website</label>
                  <div>
                    <input
                      name="website"
                      placeholder="http://website.com"
                      type="url"
                      value={website}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div class="textarea-field undefined">
                  <label class="">Short bio</label>
                  <div>
                    <textarea
                      name="shortBio"
                      placeholder="Help us introduce you to members. Share a brief introduction with your goals and interests."
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                data-css-867vqf=""
                class="saveButton"
                data-ui="savePersonalInfo"
                onClick={(event) => {
                  updateProfileHandler(event);
                }}
              >
                <span data-css-15b13by="">Save personal info</span>
              </button>
            </form>
          </section>
        </div>
      </div>
      {/* <div class="stats">
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
   */}
    </div>
    // <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
    //   <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
    //     <div
    //       style={{
    //         background: `url(${
    //           photoURL ||
    //           "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
    //         })  no-repeat center center`,
    //         backgroundSize: "cover",
    //         height: "200px",
    //         width: "200px",
    //       }}
    //       className="border border-blue-300"
    //     ></div>
    //     <div className="md:pl-4">
    //       <h2 className="text-2xl font-semibold">{displayName}</h2>
    //       <h3 className="italic">{email}</h3>
    //     </div>
    //   </div>
    //   <button
    //     className="w-full py-3 bg-red-600 mt-4 text-white"
    //     onClick={() => {
    //       auth.signOut();
    //     }}
    //   >
    //     Sign out
    //   </button>
    // </div>
  );
};

export default ProfilePage;
