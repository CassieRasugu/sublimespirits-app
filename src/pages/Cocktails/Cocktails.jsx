import React, { useEffect, useState } from 'react';
import CocktailForm from './Cocktail/CocktailForm';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

const handleAddCocktail = (newCocktail) => {
  // Update the cocktails state with the new cocktail
  setCocktails([newCocktail, ...cocktails]);
};

  useEffect(() => {
    fetch('http://localhost:9292/cocktails') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setCocktails(data));
  }, []);

  return (
    <div className="cocktail-list">
      <CocktailForm onAddCocktail={handleAddCocktail} /> {/* Add this line */}
      {cocktails.map(cocktail => (
        <div key={cocktail.id} className="cocktail-card">
          <img src={cocktail.image} alt={cocktail.name} />
          <h2>{cocktail.name}</h2>
          <p>{cocktail.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cocktails;
