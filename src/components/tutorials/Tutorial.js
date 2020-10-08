import React, { useState } from "react";

import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import MaterialIcon, { colorPalette } from "material-icons-react";
import SendMailIcon from "../send-mail/send-mail";
import EditTutorial from "./EditTutorial";

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

const Tutorial = ({ tutorial, admin }) => {
  const [currentTutorial, setCurrentTutorial] = useState(tutorial);
  //const [message, setMessage] = useState("");
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
            </div>
          </div>
          <div class="devsite-article-meta">
            <h2>{currentTutorial.title}</h2>
            <SendMailIcon />
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

          <EditTutorial
            currentTutorial={currentTutorial}
            setCurrentTutorial={setCurrentTutorial}
          />
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
