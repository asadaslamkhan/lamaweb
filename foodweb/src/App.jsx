import React, { useState } from 'react';
import { foodItems } from './Data/foodItems';
import FoodItem from './Components/Food-item';
import FavoriteItems from './Components/Favourite-items';
import  Input  from './Components/ui/input';
import  Label  from './Components/ui/label';


function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (id) => {
    const item = foodItems.find((foodItem) => foodItem.id === id);
    if (item) {
      setFavorites((prevFavorites) =>
        prevFavorites.some((fav) => fav.id === id)
          ? prevFavorites.filter((fav) => fav.id !== id)
          : [...prevFavorites, item]
      );
    }
  };

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <header className="bg-primary text-primary-foreground shadow-lg mb-8">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">there is an error occure</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search
          </Label>
          <Input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFoodItems.map((item) => (
            <FoodItem key={item.id} foodItem={item} isFavorite={favorites.some((fav) => fav.id === item.id)} toggleFavorite={toggleFavorite} />
          ))}
        </div>

        {favorites.length > 0 && <FavoriteItems favoriteItems={favorites} />}
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Food Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;