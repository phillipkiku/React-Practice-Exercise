import React, { useState } from "react";
import "../index.css";
import Welcome from "./Welcome";

function LoginForm() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoggedIn, setLoggedIn] = useState(false);
  let setError = "Invalid Emial or Password";

  const handleLoggin = () => {
    if (
      userName === "phillip" &&
      email === "phillip@gmail.com" &&
      password === "phillip"
    ) {
      setLoggedIn(true);
    } else {
      alert(setError);
      setLoggedIn(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoggin();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button type="submit">Login</button>
      {isLoggedIn ? <Welcome /> : null}
    </form>
  );
}

export default LoginForm;
