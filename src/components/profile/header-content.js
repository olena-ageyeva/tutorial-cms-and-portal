import React, { useState } from "react";
import HeaderContentItem from "./header-content-item";

const HeaderContent = () => {
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
          />
          <HeaderContentItem
            info={0}
            title="Knowledge areas"
            hidden={knowledgeToggle}
            togglePrivacy={() => setKnowledgeToggle(!knowledgeToggle)}
          />
          <HeaderContentItem
            info={"5/10"}
            title="Activity Insight"
            hidden={statToggle}
            togglePrivacy={() => setStatToggle(!statToggle)}
          />
          <HeaderContentItem
            info="80%"
            title="Profile Info"
            hidden={profileToggle}
            togglePrivacy={() => setProfileToggle(!profileToggle)}
          />
        </ul>
      </div>
    </div>
  );
};

export default HeaderContent;
