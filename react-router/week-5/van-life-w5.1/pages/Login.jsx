import React from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action(obj) {
  console.log(obj);
  return null;
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate("/host", { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {message && <h3 className="login--message">{message}!</h3>}
      <h1>Sign in to your account</h1>
      {error && <h3 className="login--error-message">{error.message}</h3>}
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === "submitting"}>
          {status != "submitting" ? "Log in" : "Logging in..."}
        </button>
      </Form>
    </div>
  );
}
