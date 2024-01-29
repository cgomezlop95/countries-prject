import { useQuery } from "@tanstack/react-query";

export function Countries() {
  const countryApi = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    const response = await fetch(countryApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchData,
  });

  return (
    <>
      <h1>Country list</h1>
      <ul>
        {countries?.map((singleCountry, index) => {
          return <li key={index}>{singleCountry.name.official}</li>;
        })}
      </ul>
    </>
  );
}
