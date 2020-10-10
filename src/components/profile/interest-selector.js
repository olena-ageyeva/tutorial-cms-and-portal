import Downshift from "downshift";
import React, { useState } from "react";

const hobbiesArray = [
  { id: 1, value: "play" },
  { id: 2, value: "code" },
  { id: 3, value: "draw" },
  { id: 4, value: "walk" },
  { id: 5, value: "sleep" },
  { id: 6, value: "blog" },
  { id: 7, value: "act" },
  { id: 8, value: "dance" },
  { id: 9, value: "sing" },
];

const IntrestSelector = ({
  items = hobbiesArray,
  labelText,
  onSelectionItemsChange,
  ...rest
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <Downshift
        {...rest}
        onChange={changeHandler(
          selectedItems,
          setSelectedItems,
          onSelectionItemsChange
        )}
      >
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          getItemProps,
          getToggleButtonProps,
          clearSelection,
          highlightedIndex,
          isOpen,
          selectedItem,
          inputValue,
        }) => {
          return (
            <div>
              <label {...getLabelProps()}>{labelText}</label>

              <input {...getInputProps()} type="text" />

              <button
                {...getToggleButtonProps({
                  style: { margin: "0 5px" },
                  className: "button-primary",
                })}
              >
                {isOpen ? "close" : "open"}
              </button>

              {selectedItem || selectedItems.length > 0 ? (
                <button
                  className="button-primary"
                  onClick={() => {
                    setSelectedItems([]);
                    clearSelection();
                  }}
                >
                  {" "}
                  X{" "}
                </button>
              ) : null}

              {isOpen
                ? items

                    .filter(
                      (item) =>
                        !selectedItems.find(({ id }) => id === item.id) &&
                        item.value.includes(inputValue)
                    )

                    .map((item, index) => {
                      return (
                        <li
                          {...getItemProps({
                            item,
                            key: item.id,
                            style: {
                              backgroundColor:
                                index === highlightedIndex ? "lightgray" : null,
                            },
                          })}
                        >
                          {" "}
                          {item.value}{" "}
                        </li>
                      );
                    })
                : null}

              <div class="interest_list">
                {selectedItems.map((value, i) => {
                  return (
                    <span key={value.id}>
                      <button
                        onClick={() =>
                          removeSelectedItemByIndex(
                            i,
                            selectedItems,
                            setSelectedItems,
                            onSelectionItemsChange
                          )
                        }
                      >
                        {value.value}
                        {"  "}X{" "}
                      </button>{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        }}
      </Downshift>

      <hr />

      {/* <pre>
        <strong>Downshift selectedItems state :</strong>
        <br /> {JSON.stringify(selectedItems)}
      </pre> */}
    </>
  );
};

/* Helper functions */
function changeHandler(
  selectedItems,
  setSelectedItems,
  onSelectionItemsChange
) {
  return (selectedItem, downshift) => {
    if (!selectedItem) return;
    const i = selectedItems.findIndex((item) => item.id === selectedItem.id);
    if (i === -1) setSelectedItems([...selectedItems, selectedItem]);
    onSelectionItemsChange([...selectedItems, selectedItem]);
    downshift.clearSelection();
  };
}

function removeSelectedItemByIndex(
  i,
  selectedItems,
  setSelectedItems,
  onSelectionItemsChange
) {
  const temp = [...selectedItems];
  temp.splice(i, 1);
  setSelectedItems(temp);
  onSelectionItemsChange(temp);
}

export default IntrestSelector;
