import "./Home.css";

interface ChildComponentProps {
  searchRes: any;
  isDay: string;
}
const Home = ({ searchRes, isDay }: ChildComponentProps) => {



  return (
    <div id="container">
      <div id="float-screen">
        <h1>Weather forecast</h1>
        <hr />
        {searchRes ? (
          <div className="grupo">
            <div className="float-screen-child">
              <img id={`temperature-${isDay}`} src='/icons/warm.png' alt="Temperature" /><span>{parseFloat((searchRes.main.temp - 273.15).toFixed(2))}ºC</span>
            </div>
            <div className="float-screen-child">
              <img src={`http://openweathermap.org/img/wn/${searchRes.weather[0].icon}@2x.png`} alt={searchRes.weather[0].description} /><span>{searchRes.weather[0].description}</span>
            </div>
          </div>

        ) : (
          <p>Search for a location to view the weather conditions.</p>
        )}
      </div>

    </div>
  );
};

export default Home;
