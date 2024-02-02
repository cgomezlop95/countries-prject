import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function Homepage() {
  return (
    <div style={{ margin: 20 }}>
      <h1>Rest Countries API</h1>
      <p>This project is inspired on restcountries.eu by Fayder Florez.</p>
      <Link to="/countries">
        <Button variant="contained" size="medium">
          Go to countries
        </Button>
      </Link>
    </div>
  );
}
