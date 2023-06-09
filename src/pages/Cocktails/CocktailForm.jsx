import React, { useState } from 'react';
import './CocktailForm.css';

function CocktailForm({ onAddCocktail }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCocktail = { name, description, image, ingredients };
    onAddCocktail(newCocktail);
    setName('');
    setDescription('');
    setImage('');
    setIngredients('');
  };

  return (
    <form className="cocktail-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label htmlFor="ingredients">Ingredients</label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button type="submit">Add Cocktail</button>
    </form>
  );
}

export default CocktailForm;



