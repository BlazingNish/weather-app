//Home page for our app
import WeatherSearch from "@/components/WeatherSearch";
import WeatherInfo from "@/components/WeatherInfo";
import { useState } from "react";
import { TbInputSearch } from "react-icons/tb";

export default function Home({}) {
  //State to store the entered location, and to check wethered the form has be submitted
  const [query, setQuery] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center space-y-5 justify-evenly h-full mx-7 my-20 drop md:flex-row">

        {}
        <WeatherSearch
          getInfo={(info) => setQuery(info)}
          buttonClicked={(status) => setButtonClicked(status)}
        />
        <div className="container flex flex-col items-center min-h-[20rem]  border border-gray-300 rounded-lg shadow-lg mx-7 py-5 bg-white md:min-h-[25rem] md:w-2/3">
          <div>
            <h1 className="mx-auto font-bold text-2xl">Weather Info</h1>
          </div>
          {/* When button is clicked, WeatherInfo Component is shown*/}
          {buttonClicked ? (
            <WeatherInfo query={query} />
          ) : (
            <>
              <div className="flex flex-col mt-20 mx-auto">
                <div className="flex flex-col items-center">
                  <TbInputSearch size={70} />
                </div>
                Waiting for input
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
