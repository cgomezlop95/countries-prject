import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function CountryImageList() {
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
    <ImageList
      sx={{ width: 1400 }}
      cols={5}
      rowHeight={164}
      variant="woven"
      gap={3}
      style={{ margin: 20 }}
    >
      {countries?.map((item, index) => (
        <Link key={index} to={item.cca2}>
          <ImageListItem>
            <img
              srcSet={`${item.flags.png}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.flags.png}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
            <ImageListItemBar title={item.name.official} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
