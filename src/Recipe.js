import React, { Component } from "react";
import "./recipe.css";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img className="image" src={image} alt="" />
      <div className="Link">
        <a href={url} target="blank" rel="noopener noreferer">
          Click to Get Recipe
        </a>
      </div>
    </div>
  );
};

export default Recipe;
