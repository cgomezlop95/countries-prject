import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CircularColor } from "./CircularColor";

export function CountryCard() {
  const countryApiCountryCode = "https://restcountries.com/v3.1/alpha";
  const { id } = useParams();

  const fetchDataById = async (id) => {
    const response = await fetch(`${countryApiCountryCode}/${id}`);
    const jsonData = await response.json();
    return jsonData[0];
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ["singleCountry", id],
    queryFn: () => fetchDataById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
        <CircularColor />
      </div>
    );
  }

  const languageArrayValues = Object.values(countryData.languages);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={countryData.flags.png}
            alt={countryData.name.official}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {countryData.name.official}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                <b>Country Code:</b> {countryData.cca2}
              </p>
              <p>
                <b>Capital:</b> {countryData.capital[0]}{" "}
              </p>
              <p>
                <b>Region:</b> {countryData.region}
              </p>
              <p>
                <b>Population:</b> {countryData.population} habitants
              </p>
              <p>
                <b>Languages:</b>
              </p>
              <ul>
                {languageArrayValues.map((language, index) => {
                  return <li key={index}>{language}</li>;
                })}
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
