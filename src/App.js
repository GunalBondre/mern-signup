import Dropdown from "./component/Dropdown";
import { useState } from "react";
import SelectDropdown from "./component/select/SelectDropdown";
import Signup from "./component/Signup";

function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
      {/* <SelectDropdown /> */}
    </div>
  );
}

export default App;
