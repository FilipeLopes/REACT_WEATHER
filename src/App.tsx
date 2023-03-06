import "./App.css";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./page/Home/Home";

function App() {
  const [searchRes, setSearchRes] = useState<any>();
  const [isDay, setIsDay] = useState<string>("");

  const handleSearchRes = (value: any) => {
    setSearchRes(value);
  };

  useEffect(() => {
    const dayTime = new Date();
    const hoursNow = dayTime.getHours();
    if (hoursNow > 18) {
      setIsDay("night");
    } else {
      setIsDay("day");
    };
  }, [])

  return (
    <div id="App" className={`App-${isDay}`}>
      <Navbar searchRes={handleSearchRes} />
      <Home searchRes={searchRes} isDay={isDay} />
      <Footer />
    </div>
  );
}

export default App;
