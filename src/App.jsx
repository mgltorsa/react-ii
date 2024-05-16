import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const fetchUsage = (setCountries, setError) => {
  const promise = fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  promise
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("Was not ok");
      }
    })
    .then((responseJson) => {
      //HTTP 200
      const countriesJson = responseJson;
      console.log("countries", countriesJson);
      setCountries(countriesJson);
    })
    .catch((error) => {
      console.error(error);
      setError(error);
    });
};

const fetchAxiosCountries = async (setCountries, setError) => {
  const response = await axios.get("https://restcountries.com/v3.1/all", {
    headers: {
      Authorization: "Bearer token123",
      "Content-Type": "application/json",
    },
  });

  const countriesData = response.data;
  setCountries(countriesData);
};

function App() {
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState();

  useEffect(() => {
    fetchAxiosCountries(setCountries, setError);
  }, []);

  return (
    <>
      <h1>Hola</h1>
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index.toString()}>
              <h3>{country.name.common}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
