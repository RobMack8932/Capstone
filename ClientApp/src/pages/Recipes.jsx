import React, { useState, useEffect } from 'react'
import '../custom.scss'
import { Link } from 'react-router-dom'
//import logo from '../images/Logo.png'
export function Recipes(props) {
  console.log(props.filteredRecipes)
  return (
    <>
      <main>
        <body>
          <h3>Here are all the recipes based on your selection!</h3>
          <p>
            If you'd like to search again, click <strong>Start Over</strong> in
            the top left corner.{' '}
          </p>
          <br />
          <br />
          <div className="data"></div>
          <div className="showRecipe">
            {props.filteredRecipes.map(recipe => (
              <div className="recipe">
                <h2>
                  <strong>{recipe.name}</strong>
                </h2>
                <h3>Protein Group</h3>
                <p>{recipe.proteinGroup}</p>
                <h3>Nationality</h3>
                <p>{recipe.nationality}</p>
                <h3>List Of Ingredients</h3>
                {recipe.ingredients.split('@').map(step => (
                  <h4>{step}</h4>
                ))}
                <h3>Cooking Steps</h3>
                {recipe.steps.split('@').map(step => (
                  <h4>{step}</h4>
                ))}
                <h3>Cooking Time</h3>
                <p>{recipe.cookingTime}</p>
              </div>
            ))}
          </div>
        </body>
        <footer>Made with love by Rob Mack EST 2020</footer>
      </main>
    </>
  )
}
