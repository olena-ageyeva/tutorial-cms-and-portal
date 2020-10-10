import React, { useState } from "react";
import HeaderContentItem from "./header-content-item";

const HeaderContent = ({ onClick }) => {
  const [interestToggle, setInterestToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(true);
  const [knowledgeToggle, setKnowledgeToggle] = useState(true);
  const [statToggle, setStatToggle] = useState(true);

  return (
    <div class="headerContentWrapper">
      <div class="headerContent">
        <ul class="dotted"></ul>
        <ul data-css-1mfvpjq="" class="socialIcons"></ul>
        <ul data-css-tb5q9j class="dotted">
          <HeaderContentItem
            info={0}
            title="Interest"
            hidden={interestToggle}
            togglePrivacy={() => setInterestToggle(!interestToggle)}
            onClick={() => onClick("interests")}
          />
          <HeaderContentItem
            info={0}
            title="Knowledge areas"
            hidden={knowledgeToggle}
            togglePrivacy={() => setKnowledgeToggle(!knowledgeToggle)}
            onClick={() => onClick("knowledge")}
          />
          <HeaderContentItem
            info={"5/10"}
            title="Activity Insight"
            hidden={statToggle}
            togglePrivacy={() => setStatToggle(!statToggle)}
            onClick={() => onClick("activity")}
          />
          <HeaderContentItem
            info="80%"
            title="Profile Info"
            hidden={profileToggle}
            togglePrivacy={() => setProfileToggle(!profileToggle)}
            onClick={() => onClick("personal")}
          />
        </ul>
      </div>
    </div>
  );
};

export default HeaderContent;
