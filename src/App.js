import React, { Component, useEffect, useState } from "react";
import Recipe from "./Recipe";
import { MdSearch } from "react-icons/md";
import "./App.css";

const App = () => {
  const APP_ID = "7d7f91fd";
  const APP_KEY = "0f093d8910e07ecf53802867ebd7dbc8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="title-background">
        <h1 className="shopName">
          <img
            src="https://image.flaticon.com/icons/svg/3026/3026994.svg"
            class="image-title"
          />
          Chef's Deck
        </h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter your food"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
          <MdSearch className="icon-search" />
        </button>
      </form>
      {query !== "" && (
        <h3 className="message-search">Search performed on {query}</h3>
      )}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      {query !== "" && <div className="message-end">End of results</div>}
    </div>
  );
};

export default App;
