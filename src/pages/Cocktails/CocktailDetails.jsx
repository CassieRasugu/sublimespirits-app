import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CocktailDetails.css';

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/cocktails/${id}`) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setCocktail(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="cocktail-details">
      {cocktail ? (
        <>
          <h2>{cocktail.name}</h2>
          <img src={cocktail.image} alt={cocktail.name} />
          <p>{cocktail.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <Link to="/cocktails">Back to Cocktail List</Link>
          <Link to={`/cocktails/${cocktail.id}`} key={cocktail.id} className="cocktail-card">
  {/* existing cocktail card content */}
</Link>
        </>
      ) : (
        <p>Cocktail not found.</p>
      )}
    </div>
  );
};

export default CocktailDetails;
