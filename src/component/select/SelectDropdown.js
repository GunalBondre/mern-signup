import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./select.scss";

const SelectDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [defaultValue, setdefaultValue] = useState("");

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  useEffect(() => {
    var tag = document.createElement("p");
    var text = document.createTextNode("Title");

    var element = document.querySelector(".css-319lph-ValueContainer");
    if (element) {
      tag = tag.appendChild(text);
      element.appendChild(tag);
    }
    return () => {};
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Select
        options={options}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
    </div>
  );
};

export default SelectDropdown;
