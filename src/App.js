import "./App.css";
import { useState } from "react";
import Cardbook from "./Cardbook";
import { useEffect } from "react";
import React from "react";
import Category from "./components/category";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

  const handlefish = () => {
    setQuery("fish");
  };
  const handlechicken = () => {
    setQuery("chicken");
  };
  const handlemeat = () => {
    setQuery("meat");
  };
  const handlevegan = () => {
    setQuery("vegan");
  };
  const handlefruits = () => {
    setQuery("fruits");
  };
  const handleicecream = () => {
    setQuery("icecream");
  };
  ///////////////////////////////////////////// API service ///////////////////////////////////
  useEffect(() => {
    getRecipes();
  }, [query]);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=985872c6&app_key=ed99987480020a17ff43429bdd755ebd`
    );

    const data = await response.json();
    setRecipes(data.hits);
    setSearch("");
  };
  ///////////////////////////////////////////// API service ///////////////////////////////////
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="form-search">
        <form onSubmit={onSubmitHandler}>
          <label>
            <input
              type="search"
              placeholder="search your food ..."
              value={search}
              onChange={onInputChange}
              className="form-search-input"
            />
            <button className="form-search-button" type="submit">
              Search
            </button>
          </label>
        </form>
        <h4 style={{fontSize:"30px"}}>Category Items ↓ ↓ ↓ ↓</h4>
      </div>
      
      <Category
        handlefish={handlefish}
        handlechicken={handlechicken}
        handlefruits={handlefruits}
        handleicecream={handleicecream}
        handlemeat={handlemeat}
        handlevegan={handlevegan}
      />
      <div className="result">
        {recipes.map((recipe, id) => {
          return (
            <Cardbook
              key={id}
              ingredients={recipe.recipe.ingredients}
              recipe={recipe}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
