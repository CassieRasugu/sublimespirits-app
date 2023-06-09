import React, { useState } from 'react';
import './Cocktails/CocktailForm.css'

function CocktailForm({ onAddCocktail }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new cocktail object
    const newCocktail = {
      name: name,
      ingredients: ingredients,
      description: description,
      image: imageURL
    };

    // Call the onAddCocktail function passed as a prop
    onAddCocktail(newCocktail);

    // Reset the input fields
    setName('');
    setIngredients('');
    setDescription('');
    setImageURL('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="cocktail-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="form-input"
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Add Cocktail</button>
      </form>
    </div>
  );
}

export default CocktailForm;

