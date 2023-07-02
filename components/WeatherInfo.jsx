// Weather information component

import { useState, useEffect, useRef } from "react";
import Loading from "@/pages/Loading";
import Image from "next/image";
import { BiSolidErrorCircle } from "react-icons/bi";

// Takes query as prop and makes API call to get weather information
const WeatherInfo = ({ query }) => {
  // States to store weather information and to check if loading
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // On render, the component fetches the information, and whenever the query prop changes, the data is fetched again
  useEffect(() => {
    const fetchData = async () => {
      // variable to store the response from api
      var res;
      // setting isLoading to true while data is fetched
      setIsLoading(true);
      // If the entered query is a number, then api call is made to the route which accepts zipcode as parameter
      // Nextjs api route is used to prevent the client from accessing the api keys while fetching data from OpenWeatherMap API
      if (!isNaN(query)) {
        res = await fetch(`/api/getZipWeather?location=${query}`);
      } else {
        res = await fetch(`/api/getWeather?location=${query}`);
      }
      const data = await res.json();
      setWeatherInfo(data);
    };
    fetchData();
    // After data is fetched, isLoading is set to false
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [query]);

  // constructing the url to get the icon related the current weather
  const imageurl = `http://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`;

  return (
    <>
      {/* While data is fetching and isLoading is true, a loader will be displayed, after data is fetched, the data will be displayed*/}
      {isLoading ? (
        <Loading />
      ) : weatherInfo?.cod === 200 ? (
        // When the response status in 200, the information is displayed
        <>
          <div className="flex flex-col mt-20 mx-auto items-center rounded bg-teal-100 p-3 shadow-xl">
            {/* Div for weather discription and related weather icon provided by OpenWeatherMap */}
            <div className="relative h-[100px] w-[100px]">
              <Image
                src={imageurl}
                fill
                alt="weather-icon"
                priority={true}
              ></Image>
            </div>
            <p>{weatherInfo?.weather?.[0]?.description}</p>
          </div>
          <div className="flex flex-row mt-14 mx-auto justify-evenly space-x-5 flex-wrap md:">
            {/* Div for other information related to weather such as temperature, feels like, humidity, wind speed and Cloudiness */}
            <div className="flex flex-col items-center mx-3 my-5 border rounded-lg border-gray-300 p-2 shadow-lg bg-teal-50">
              <p>{weatherInfo?.main?.temp} °c</p>
              <p>Temperature</p>
            </div>
            <div className="flex flex-col items-center mx-3 my-5 border rounded-lg border-gray-300 p-2 shadow-lg bg-teal-50">
              <p>{weatherInfo?.main?.feels_like} °c</p>
              <p>Feels like</p>
            </div>
            <div className="flex flex-col items-center mx-3 my-5 border rounded-lg border-gray-300 p-2 shadow-lg bg-teal-50">
              <p>{weatherInfo?.main?.humidity} %</p>
              <p>Humidity</p>
            </div>
            <div className="flex flex-col items-center mx-3 my-5 border rounded-lg border-gray-300 p-2 shadow-lg bg-teal-50">
              <p>{weatherInfo?.wind?.speed} m/s</p>
              <p>Wind Speed</p>
            </div>
            <div className="flex flex-col items-center mx-3 my-5 border rounded-lg border-gray-300 p-2 shadow-lg bg-teal-50">
              <p>{weatherInfo?.clouds?.all} %</p>
              <p>Cloudiness</p>
            </div>
          </div>
        </>
      ) : (
        // If the reponse status is not 200, then error is shown
        <>
          <div className="flex flex-col mt-20 mx-auto items-center">
            <BiSolidErrorCircle size={70} />
            Could not find the entered location, please check again
          </div>
        </>
      )}
    </>
  );
};

export default WeatherInfo;
