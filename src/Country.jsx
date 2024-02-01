import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function Country() {
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
    return <h1>Loading</h1>;
  }

  const languageArrayValues = Object.values(countryData.languages);

  return (
    <>
      <h1>{countryData.name.official}</h1>
      <p>Country Code: {countryData.cca2}</p>
      <p>Capital: {countryData.capital[0]} </p>
      <p>Region: {countryData.region}</p>
      <p>Population: {countryData.population}</p>
      <p>Languages:</p>
      <ul>
        {languageArrayValues.map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
      <img src={countryData.flags.png} />
    </>
  );
}
