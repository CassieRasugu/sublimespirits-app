import React from 'react';
import PropTypes from 'prop-types';

function CocktailCard({ cocktail, onDelete }) {
  const { id, name, image, description } = cocktail;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="cocktail-card">
      <div className="cocktail-card-img">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="cocktail-card-actions">
          <button className="cocktail-card-delete-button" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CocktailCard;
