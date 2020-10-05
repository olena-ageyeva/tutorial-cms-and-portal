import React, { useState } from "react";
import TutorialDataService from "../../services/TutorialService";
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { Checkbox } from "@progress/kendo-react-inputs";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  ForeColor,
  BackColor,
  CleanFormatting,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  InsertFile,
  SelectAll,
  Print,
  Pdf,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const Tutorial = ({ tutorial, refreshList, admin }) => {
  const initialTutorialState = {
    key: null,
    title: "",
    description: "",
    content: "",
    published: false,
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  let editor = null;
  let textarea = null;

  const getHtml = () => {
    const view = editor.view;
    textarea.value = EditorUtils.getHtml(view.state);
    setCurrentTutorial({ ...currentTutorial, content: textarea.value });
  };

  const setHtml = () => {
    const view = editor.view;
    EditorUtils.setHtml(view, textarea.value);
  };

  if (currentTutorial.key !== tutorial.key) {
    setCurrentTutorial(tutorial);
    setMessage("");
  }

  const handleInputChange = (event) => {
    console.log("event", event);
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = (status) => {
    TutorialDataService.update(currentTutorial.key, { published: status })
      .then(() => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      content: currentTutorial.content,
    };

    TutorialDataService.update(currentTutorial.key, data)
      .then(() => {
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.key)
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div key={currentTutorial}>
      {currentTutorial ? (
        <>
          <div class="devsite-article-meta">
            <ul
              class="devsite-breadcrumb-list"
              role="navigation"
              aria-label="Breadcrumb"
            >
              <li class="devsite-breadcrumb-item">
                <a
                  href="/"
                  class="devsite-breadcrumb-link gc-analytics-event"
                  data-category="Site-Wide Custom Events"
                  data-label="Breadcrumbs"
                  data-value="1"
                >
                  {"EBSCO-Onboarding > "}
                </a>
              </li>
              <li class="devsite-breadcrumb-item">
                <a
                  href="/SSH"
                  class="devsite-breadcrumb-link gc-analytics-event"
                  data-category="Site-Wide Custom Events"
                  data-label="Breadcrumbs"
                  data-value="1"
                >
                  {currentTutorial.title}
                </a>
              </li>
            </ul>

            <div class="rating">
              <MaterialIcon
                icon="star_border"
                color={colorPalette.amber._200}
              />

              <span
                class={`material-icons${rating > 0 ? " star" : ""}`}
                onClick={() => {
                  setRating(1);
                }}
              >
                {rating < 1 ? "star_border" : "star"}
              </span>
              <span
                class={`material-icons${rating > 1 ? " star" : ""}`}
                onClick={() => {
                  setRating(2);
                }}
              >
                {rating < 2 ? "star_border" : "star"}
              </span>
              <span
                class={`material-icons${rating > 2 ? " star" : ""}`}
                onClick={() => {
                  setRating(3);
                }}
              >
                {" "}
                {rating < 3 ? "star_border" : "star"}
              </span>
              <span
                class={`material-icons${rating > 3 ? " star" : ""}`}
                onClick={() => {
                  setRating(4);
                }}
              >
                {" "}
                {rating < 4 ? "star_border" : "star"}
              </span>
              <span
                class={`material-icons${rating > 4 ? " star" : ""}`}
                onClick={() => {
                  setRating(5);
                }}
              >
                {" "}
                {rating < 5 ? "star_border" : "star"}
              </span>

              {/* <div class="star" data-rating-val="1" role="button">
                <i class="material-icons">star_border</i>
                <i class="material-icons">star_border</i>
                <span class="material-icons">star_border</span>
                <MaterialIcon icon="star_border" />
              </div>
              <div class="material-icons" data-rating-val="1" role="button">
                <i class="material-icons">star_border</i>
              </div>
              <div class="star" data-rating-val="1" role="button">
                <i class="material-icons">star_border</i>
              </div>
              <div class="star" data-rating-val="1" role="button">
                <i class="material-icons">star_border</i>
              </div> */}
            </div>
          </div>
          <div class="devsite-article-meta">
            <h2>{currentTutorial.title}</h2>
            <button class="feedback">Send feedback</button>
          </div>

          <Editor
            tools={
              admin
                ? [
                    [Bold, Italic, Underline, Strikethrough],
                    [Subscript, Superscript],
                    ForeColor,
                    BackColor,
                    [CleanFormatting],
                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                    [Indent, Outdent],
                    [OrderedList, UnorderedList],
                    FontSize,
                    FontName,
                    FormatBlock,
                    [SelectAll],
                    [Undo, Redo],
                    [Link, Unlink, InsertImage, ViewHtml],
                    [InsertTable, InsertFile],
                    [Pdf, Print],
                    [
                      AddRowBefore,
                      AddRowAfter,
                      AddColumnBefore,
                      AddColumnAfter,
                    ],
                    [DeleteRow, DeleteColumn, DeleteTable],
                    [MergeCells, SplitCell],
                  ]
                : []
            }
            contentStyle={{ height: 600, width: "100%" }}
            defaultContent={currentTutorial.content || "Coming soon..."}
            key={currentTutorial.content}
            ref={(node) => (editor = node)}
          />
          <br />
          <button className="k-button k-button-icontext" onClick={getHtml}>
            <span className="k-icon k-i-arrow-60-down" />
            Gets HTML
          </button>

          <button className="k-button k-button-icontext" onClick={setHtml}>
            <span className="k-icon k-i-arrow-60-up" />
            Sets HTML
          </button>
          <br />
          <br />
          <textarea
            className="k-textarea"
            style={{ height: 100, width: "100%", resize: "none" }}
            defaultValue={currentTutorial.content}
            ref={(node) => (textarea = node)}
          />

          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentTutorial.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentTutorial.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  name="content"
                  value={currentTutorial.content}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={updateTutorial}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        </>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
