import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function Country() {
  const countryApiCountryCode = "https://restcountries.com/v3.1/alpha";
  const { id } = useParams();

  //console.log(id);

  const fetchDataById = async (id) => {
    const response = await fetch(`${countryApiCountryCode}/${id}`);
    const jsonData = await response.json();
    //console.log('jsonData', jsonData[0]);
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
  //console.log('data: ', data);

  return (
    <>
      <h1>{countryData.name.official}</h1>
      <p>Country Code: {countryData.cca2}</p>
      <p>Capital: {countryData.capital[0]} </p>
      <p>Region: {countryData.region}</p>
      <img src={countryData.flags.png} alt="" />
    </>
  );
}
