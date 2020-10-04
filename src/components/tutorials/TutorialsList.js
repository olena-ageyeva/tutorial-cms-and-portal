import React, { useState, useContext } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../../services/TutorialService";
import Tutorial from "./Tutorial";
import { UserContext } from "../providers/UserProvider";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const user = useContext(UserContext);

  /* use react-firebase-hooks */
  const [tutorials, loading, error] = useList(TutorialDataService.getAll());

  const refreshList = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    const { title, description, content, published } = tutorial.val();

    setCurrentTutorial({
      key: tutorial.key,
      title,
      description,
      content,
      published,
    });

    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <section class="devsite-wrapper">
        <div class="devsite-tutorial-nav" fixed>
          <h4>Table of Contents</h4>
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Loading...</span>}
          <ul className="list-group">
            {!loading &&
              tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.val().title}
                </li>
              ))}
          </ul>
          {user.displayName.toLowerCase() === "admin" && (
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllTutorials}
            >
              Remove All
            </button>
          )}
        </div>
        <section id="tutorial-content">
          <main
            role="main"
            class="devsite-main-content"
            has-toc=""
            has-book-nav=""
          >
            {currentTutorial ? (
              // <Tutorial tutorial={currentTutorial} refreshList={refreshList} />
              currentTutorial.content
            ) : (
              <div>
                <br />
                <p>Please click on a Tutorial...</p>
              </div>
            )}
          </main>
        </section>
      </section>

      {/* <div className="list row">
        <h2>EBSCO Onboarding Tutorial</h2>
        <div className="col-md-6">
          <h4>Table of Contents</h4>

          {error && <strong>Error: {error}</strong>}
          {loading && <span>Loading...</span>}
          <ul className="list-group">
            {!loading &&
              tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.val().title}
                </li>
              ))}
          </ul>

          {user.displayName.toLowerCase() === "admin" && (
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllTutorials}
            >
              Remove All
            </button>
          )}
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial tutorial={currentTutorial} refreshList={refreshList} />
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    */}
    </>
  );
};

export default TutorialsList;
