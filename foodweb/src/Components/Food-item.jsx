import React from 'react';
import {Heart} from 'lucide-react';
import  Button  from '../Components/ui/Button';

function FoodItem({ foodItem, isFavorite, toggleFavorite }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={foodItem.image} alt={foodItem.name} className="w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-bold mb-2">{foodItem.name}</h3>
      <p className="text-gray-600 text-center mb-4">{foodItem.description}</p>
      <Button variant={isFavorite ? "default" : "outline"} onClick={() => toggleFavorite(foodItem.id)}>
        <Heart className="mr-2 h-4 w-4" /> {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </div>
  );
}

export default FoodItem;