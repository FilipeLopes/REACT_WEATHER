import axios from "axios";

const password: string = "ea8d86195bf3c613287ef142ce3ac1ba";
//const password: string = "errado";

export const useFetchLocationAPI = () => {
  const fetchLocation = async (search: string) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${password}`
      );
      return data;
    } catch (error) {
      // handle error
      console.log(error);
    }
  };
  return {
    fetchLocation,
  };
};
