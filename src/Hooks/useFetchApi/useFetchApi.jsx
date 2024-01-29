import { useState } from "react";

const useFetchApi = () => {
  const [plants, setPlants] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (plantName) => {
    if (!plantName) {
      setError("Please enter a plant name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://houseplants1.p.rapidapi.com/api/v1/houseplant/${plantName}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "b7866aaffemsh6fddae4c46c4e6bp19df30jsn3c3195b90190",
            "X-RapidAPI-Host": "houseplants1.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { plants, loading, error, fetchData };
};

export default useFetchApi;
