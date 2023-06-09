import React, { useEffect, useState } from 'react';
import CocktailForm from './CocktailForm';
import CocktailCard from './CocktailCard';
import '../../index.css';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

  const handleDeleteCocktail = (id) => {
    const updatedCocktails = cocktails.filter(cocktail => cocktail.id !== id);
    setCocktails(updatedCocktails);
  };

  const handleAddCocktail = (newCocktail) => {
    setCocktails([newCocktail, ...cocktails]);
  };

  useEffect(() => {
    fetch('http://localhost:9292/cocktails') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCocktails(data);
      });
  }, []);

  return (
    <div className="cocktail-list">
      <CocktailForm onAddCocktail={handleAddCocktail} />
      {cocktails.map(cocktail => (
        <CocktailCard
          key={cocktail.id}
          cocktail={cocktail}
          onDelete={handleDeleteCocktail}
        />
      ))}
    </div>
  );
}

export default CocktailList;
