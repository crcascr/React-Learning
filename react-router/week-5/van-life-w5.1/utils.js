import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathName = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must be logged in first&redirectTo=${pathName}`
    );
  }
}
