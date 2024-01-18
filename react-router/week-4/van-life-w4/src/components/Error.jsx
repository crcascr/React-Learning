import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="error">
      <h1 className="error--title">
        There was an error:{" "}
        <span className="error--description">{error.message}</span>, please try
        again!
      </h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}

export default Error;
