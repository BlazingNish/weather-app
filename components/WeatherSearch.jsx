//Search component to take input from user

import { useState } from "react";
import { FaMapMarked } from "react-icons//fa";

// Components take two props, one to pass the input and other to pass state whether the button has been clicked or not
const WeatherSearch = ({ getInfo, buttonClicked }) => {
  //State to hold the input entered by the user
  const [query, setQuery] = useState("");

  //Function to handle submit when the form is submitted, passes the entered query to the getinfo prop which updated the query state in index
  const handleSubmit = async (e) => {
    e.preventDefault();
    getInfo(query);
    buttonClicked(true);
  };

  return (
    <>
      <div className="container px-6 flex flex-col items-center w-auto  min-h-[10rem]  border rounded-lg border-gray-300 shadow-lg mx-7 py-8 bg-white md:min-h-[25rem] md:w-1/3">
        <div className="mb-[3rem] mt-[5rem]">
          <FaMapMarked size={70} />
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* The input is stored in the query state */}
              <input
                type="text"
                id="location"
                placeholder="City or Pincode"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="peer w-full py-2 border-gray-300 rounded-lg shadow-sm placeholder-transparent focus:border-teal-500 focus:ring-teal-500 "
                required
              />
              <label
                htmlFor="location"
                className="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 transition-all 
                 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-0"
              >
                City or Zipcode
              </label>
            </div>
            <button
              className="rounded-full bg-teal-300 p-3 w-1/2 hover:bg-teal-500 hover:border-teal-500 hover:ring-teal-500 mt-3"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WeatherSearch;

export async function getSeverSideProps() {}
