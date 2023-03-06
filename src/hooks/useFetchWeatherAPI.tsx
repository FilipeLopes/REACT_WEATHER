import axios from "axios";

const password: string = "ea8d86195bf3c613287ef142ce3ac1ba";
//const password: string = "errado";

export const useFetchWeatherAPI = () => {
  const fetchWeather = async (search: string) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${password}`
      );
      return data;
    } catch (error) {
      // handle error
      console.log(error);
    }
  };
  return {
    fetchWeather,
  };
};
