import { useState } from "react";
import "./Login.css";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login">
      <h1 className="login--title">Sign in to your account</h1>
      <form className="login--form" onSubmit={handleSubmit}>
        <input
          className="login--input-email"
          type="email"
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
          placeholder="Email address"
        />
        <input
          className="login--input-password"
          type="password"
          name="password"
          value={loginFormData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="login--button link--button-van">Sign in</button>
      </form>
    </div>
  );
}

export default Login;
