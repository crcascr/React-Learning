import React from "react";
import {
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const loginData = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect("/host");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = React.useState("idle");

  const message = useLoaderData();
  const navigate = useNavigate();
  const errorMessage = useActionData();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    loginUser(loginFormData)
      .then((data) => {
        navigate("/host", { replace: true });
      })
      .catch((err) => {})
      .finally(() => {
        setStatus("idle");
      });
  }

  return (
    <div className="login-container">
      {message && <h3 className="login--message">{message}!</h3>}
      <h1>Sign in to your account</h1>
      {errorMessage && <h3 className="login--error-message">{errorMessage}</h3>}
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
