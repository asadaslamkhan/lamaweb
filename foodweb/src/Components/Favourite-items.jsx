import React from 'react';
import FoodItem from './Food-item';

function FavoriteItems({ favoriteItems }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Favorite Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteItems.map((item) => (
          <FoodItem key={item.id} foodItem={item} isFavorite={true} toggleFavorite={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteItems;