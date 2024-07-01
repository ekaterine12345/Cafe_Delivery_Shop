import React from 'react';
import useFetchFoodData from './useFetchFoodData';
import './FoodData.css'; // Import CSS file for styling
import { motion } from 'framer-motion';

const FoodData = () => {
  const { foodData, loading, error } = useFetchFoodData(6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="food-container">
      <h1>Coming Soon</h1>
      <div className="food-cards">
        {foodData.map((food, index) => (
          <motion.div 
            key={index} 
            className="food-card"
            whileHover={{ scale: 1.05, backgroundColor: 'rgb(250, 200, 206)' }}
            transition={{ duration: 0.1}}
          >
            <h2>{food.strMeal}</h2>
            <img src={food.strMealThumb} alt={food.strMeal} />
            <p>{food.strInstructions.substring(0, 100)}...</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodData;
