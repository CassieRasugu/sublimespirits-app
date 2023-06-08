import React, { useEffect, useState } from 'react';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/cocktails') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setCocktails(data));
  }, []);

  return (
    <div className="cocktail-list">
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

export default CocktailList;
