import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useFetchLocationAPI } from "../hooks/useFetchLocationAPI";
import { useFetchWeatherAPI } from "../hooks/useFetchWeatherAPI";
import "./Navbar.css";

interface NavbarProps {
  searchRes: (value: any) => void;
}

const Navbar = ({ searchRes }: NavbarProps) => {
  const [search, setSearch] = useState<string | null>(null);
  const [listLocations, setListLocations] = useState<any[]>([]);

  const { fetchLocation } = useFetchLocationAPI();
  const { fetchWeather } = useFetchWeatherAPI();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Pass search value to fetch weather
    if (search) {
      fetchWeather(search).then((data) => {
        searchRes(data);
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // This if is necessary because this state allows null
    if (search && search.length > 3) {
      fetchLocation(search).then((data) => {
        setListLocations(data);
      });
    }
  }, [search, fetchLocation]);

  return (
    <div className="navbar">
      <datalist id="loc-res">
        {listLocations &&
          listLocations.map((location: any, idx) => (
            <option key={idx}>
              {location.name}, {location.country}
            </option>
          ))}
      </datalist>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="on"
          list="loc-res"
          placeholder="Search a city"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Navbar;
