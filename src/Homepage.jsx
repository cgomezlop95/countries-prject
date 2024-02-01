import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>This project is inspired on restcountries.eu by Fayder Florez.</p>
      <Link to="/countries">Go to countries</Link>
    </>
  );
}
