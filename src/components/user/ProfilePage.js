import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { generateUserDocument } from "../../firebase";
import HeaderBar from "../profile/header-bar";
import HeaderContent from "../profile/header-content";
import ProfileItem from "../profile/profile-item";

const ProfilePage = () => {
  const user = useContext(UserContext);

  const {
    displayName,
    email,
    title,
    employer,
    fullname,
    town,
    websiteUrl,
    userBio,
  } = user;

  const [name, setName] = useState(fullname);
  const [nickname, setNickName] = useState(displayName);
  const [jobTitle, setJobTitle] = useState(title || null);
  const [company, setCompany] = useState(employer || null);

  const [location, setLocation] = useState(town || null);
  const [website, setWebsite] = useState(websiteUrl || null);
  const [bio, setBio] = useState(userBio || null);
  const [error, setError] = useState(null);

  const updateProfileHandler = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await generateUserDocument(user, {
        displayName: nickname,
        title: jobTitle,
        fullname: name,
        employer: company,
        town: location,
        websiteUrl: website,
        userBio: bio,
      }).then(() => {
        console.log(
          "success update",
          user,
          fullname,
          displayName,
          jobTitle,
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
      case "bio":
        setBio(value);
        break;
      default:
        break;
    }
  };

  return (
    <div class="profile">
      <HeaderBar name={fullname || nickname || "Anonymous"} />
      <HeaderContent />

      <div id="edit">
        <div class="container">
          <section id="edit-personal-info" class="profile-form">
            <h1>Personal info</h1>
            <hr />
            <form>
              <div class="account-field">
                <ProfileItem
                  title="Name"
                  fieldName="name"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeHandler}
                />
                <ProfileItem
                  title="Nickname"
                  fieldName="nickname"
                  value={nickname}
                  placeholder="How would you like to be called?"
                  onChange={onChangeHandler}
                />
              </div>

              <div class="account-field">
                <ProfileItem
                  title="Job title"
                  fieldName="jobTitle"
                  value={jobTitle}
                  placeholder="Developer"
                  onChange={onChangeHandler}
                />
                <ProfileItem
                  title="Company name"
                  fieldName="company"
                  value={company}
                  placeholder="EBSCO-IS"
                  onChange={onChangeHandler}
                />
              </div>
              <div class="account-field">
                <ProfileItem
                  title="Location"
                  fieldName="location"
                  value={location}
                  placeholder="Ipswich, MA"
                  onChange={onChangeHandler}
                />

                <ProfileItem
                  title="Personal website"
                  fieldName="website"
                  value={website}
                  placeholder="http://website.com"
                  onChange={onChangeHandler}
                />
              </div>

              <div>
                <div class="textarea-field undefined">
                  <label>Short bio</label>
                  <div>
                    <textarea
                      name="bio"
                      value={bio}
                      onChange={(event) => onChangeHandler(event)}
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
    </div>
  );
};

export default ProfilePage;
