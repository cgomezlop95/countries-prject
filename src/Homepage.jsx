import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/countries">Go to countries</Link>
    </>
  );
}
