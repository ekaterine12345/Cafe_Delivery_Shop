import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchFoodData = (numItems = 6) => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const requests = Array(numItems).fill().map(() => axios.get('https://www.themealdb.com/api/json/v1/1/random.php'));
        const responses = await Promise.all(requests);
        const meals = responses.map(response => response.data.meals[0]);
        setFoodData(meals);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [numItems]);

  return { foodData, loading, error };
};

export default useFetchFoodData;
