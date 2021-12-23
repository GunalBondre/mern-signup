import React, { useState, useCallback } from "react";

const ListItem = ({ option, i, setOpen, setSelected }) => {
  const [state, setState] = useState({
    cursor: 0,
  });

  const handleEnter = (option, e) => {
    console.log("ee", e.keyCode, option);
    if (e.keyCode === 13) {
      setSelected(option);
    }
  };
  return (
    <div>
      <li
        role="button"
        tabIndex={i}
        onClick={() => {
          setSelected(option);
          setOpen(false);
        }}
        className={state.cursor === i ? "activeList" : "list-item"}
        onKeyDown={(e) => handleEnter(option, e)}
      >
        {option}
      </li>
    </div>
  );
};

export default ListItem;
