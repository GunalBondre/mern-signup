import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./signup.scss";
import axios from "axios";


const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [selected, setSelected] = useState("");

  // const [optionData, setOption] = useState({
  //   optionValue: "",
  // });
  const handleSubmit = (e) => {
    const data = {
      username: state.username,
      email: state.email,
      password: state.password,
      optionValue: selected,
    };
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/register", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            id=""
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            id=""
            onChange={handleChange}
          />
          <Dropdown selected={selected} setSelected={setSelected} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
