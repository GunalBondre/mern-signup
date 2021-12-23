import React, { useState, useEffect, useRef, useCallback } from "react";
import "./dropdown.scss";

const Dropdown = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const options = ["Option1", "Option2", "Option3", "Option4"];

  const [state, setState] = useState({
    cursor: 0,
  });
  //   const label = ["frontend", "backend"];

  let menuRef = useRef();

  useEffect(() => {
    // document.addEventListener("keydown", handleEvent);

    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener("keydown", handleEvent);
    };
  });

  // const handleKeyEvent = useCallback(
  //   (option, i) => {
  //     console.log(option, i);
  //     setSelected(option);
  //     setOpen(false);
  //   },
  //   [setSelected]
  // );

  // const handleEvent = useCallback(
  //   (e) => {
  //     if (e.keyCode === 13) {
  //       handleKeyEvent();
  //     }
  //   },
  //   [handleKeyEvent]
  // );

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.keyCode === 38 && state.cursor > 0) {
      setState({ ...state, cursor: state.cursor - 1 });
      console.log("up");
    } else if (e.keyCode === 40 && state.cursor < options.length - 1) {
      setState({ ...state, cursor: state.cursor + 1 });
      console.log("down");
    } else if (e.keyCode === 13) {
      const optionValue = options[state.cursor];
      setSelected(optionValue);
      setOpen(false);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div
          ref={menuRef}
          className={
            open ? "dropdown-wrapper--up dropdown-wrapper " : "dropdown-wrapper"
          }
        >
          <div className="dropdown-container">
            <div
              className={"dropdown-header"}
              onClick={() => setOpen(!open)}
              data-testid="dropdown"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              {!open ? (
                <div className={selected ? "title-active " : "dropdown-title"}>
                  {selected ? selected : "dropdown-select"}
                </div>
              ) : (
                <div className={selected ? "active-color " : "dropdown-title"}>
                  {selected ? selected : "dropdown-select"}
                </div>
              )}
              <i
                className={open ? "fas fa-chevron-up" : "fas fa-chevron-down"}
              ></i>
            </div>
            {open ? (
              <div
                className={selected ? "active-label active-label--up" : "label"}
              >
                {open ? "Hint Text" : "Title"}{" "}
              </div>
            ) : (
              <div className={selected ? "active-label " : "label "}>
                {open ? "Hint Text" : "Title"}{" "}
              </div>
            )}
          </div>
          {open && (
            // <ul className="list">
            //   {options.map((option, i) => {
            //     return (
            //       <ListItem
            //         option={option}
            //         setOpen={setOpen}
            //         setSelected={setSelected}
            //       />
            //     );
            //   })}
            // </ul>
            <ul className="list" data-testid="lists">
              {options.map((option, i) => (
                <li
                  role="list"
                  key={i}
                  tabIndex="0"
                  onClick={(e) => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={state.cursor === i ? "activeList" : "list-item"}
                  onKeyDown={
                    state.cursor === i
                      ? (e) => {
                          if (e.key === 13) {
                            setSelected(option);
                            setOpen(false);
                          }
                        }
                      : null
                  }
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
