import React from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const loginData = await loginUser({ email, password });
  localStorage.setItem("loggedin", true);
  return redirect("/host");
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

  return (
    <div className="login-container">
      {message && <h3 className="login--message">{message}!</h3>}
      <h1>Sign in to your account</h1>
      {error && <h3 className="login--error-message">{error.message}</h3>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === "submitting"}>
          {status != "submitting" ? "Log in" : "Logging in..."}
        </button>
      </Form>
    </div>
  );
}
