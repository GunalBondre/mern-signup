import React, { useState, useEffect, useRef, useCallback } from "react";
import "./dropdown.scss";

const Dropdown = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const options = ["Male", "Female", "Other"];
  // const [selected, setSelected] = useState("");

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

  const handleClick = (option) => {
    setSelected(option);
    setOpen(false);
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
                <div
                  className={selected ? "title-active " : "dropdown-title"}
                  data-testid="title"
                >
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
            <ul
              className="list"
              data-testid="lists"
              aria-labelledby="list-heading"
            >
              {options.map((option, i) => (
                <li
                  role="list"
                  key={i}
                  tabIndex="0"
                  // onClick={(e) => {
                  //   setSelected(option);
                  //   setOpen(false);
                  // }}
                  onClick={(e) => handleClick(option)}
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
                  <p data-testid="select-output">{option}</p>
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
