import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

import HeaderBar from "./header-bar";
import HeaderContent from "./header-content";

import PersonalInfo from "./profile-personal-info";
import InteretstForm from "./profile-interest-form";
import ActivityInsight from "./profile-activity-insight";
import KnowledgeArea from "./profile-knowledge-area";

const ProfilePage = () => {
  const user = useContext(UserContext);

  const { displayName, fullname } = user;

  //const [error, setError] = useState(null);

  const [content, setContent] = useState("personal");

  console.log("content", content);

  return (
    <div class="profile">
      <HeaderBar name={fullname || displayName || "Anonymous"} />
      <HeaderContent onClick={setContent} />
      {content === "personal" && <PersonalInfo />}
      {content === "interests" && <InteretstForm />}
      {content === "activity" && <ActivityInsight />}
      {content === "knowledge" && <KnowledgeArea />}
    </div>
  );
};

export default ProfilePage;
