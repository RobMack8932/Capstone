import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import logo from '../images/Logo.png'
import { Homepage } from './Homepage'
import { AddRecipe } from './AddRecipe'
import { Nationalities } from './Nationalities'
import { Recipes } from './Recipes'

export function FilterRecipes() {
  const [pageImLookingAt, setPageImLookingAt] = useState('protein')
  const [protein, setProtein] = useState('')
  const [nationality, setNationality] = useState('')
  const [recipes, setRecipes] = useState([])

  function handleButtonClick(event) {
    event.preventDefault()
    const value = event.target.value
    const id = event.target.id

    if (id === 'protein') {
      setProtein(event.target.value)
    } else if (id === 'nationality') {
      setNationality(value)
    }
  }

  function fetchRecipes() {
    fetch('/api/Recipes')
      .then(response => response.json())
      .then(apiData => setRecipes(apiData))
  }

  useEffect(fetchRecipes, [])
  useEffect(fetchRecipes, [pageImLookingAt])

  const filteredRecipes = recipes.filter(
    recipe =>
      recipe.nationality === nationality && recipe.proteinGroup === protein
  )
  return (
    <>
      <header>
        <h5>
          <button
            className="color2"
            onClick={event => {
              event.preventDefault()
              setPageImLookingAt('protein')
              setProtein('')
              setNationality('')
            }}
          >
            Start Over?
          </button>
        </h5>
      </header>
      <h1>
        {' '}
        <button
          className="color3"
          onClick={event => {
            event.preventDefault()
            setPageImLookingAt('addRecipe')
            setProtein('')
            setNationality('')
          }}
        >
          Add Recipe!
        </button>
      </h1>
      <div class="logo">
        <img src={logo} />
      </div>

      {pageImLookingAt === 'protein' && (
        <Homepage
          setProtein={setProtein}
          setPageImLookingAt={setPageImLookingAt}
        />
      )}
      {pageImLookingAt === 'nationality' && (
        <Nationalities
          setNationality={setNationality}
          setPageImLookingAt={setPageImLookingAt}
        />
      )}
      {pageImLookingAt === 'recipes' && (
        <Recipes
          filteredRecipes={filteredRecipes}
          setRecipes={setRecipes}
          setPageImLookingAt={setPageImLookingAt}
        />
      )}

      {pageImLookingAt === 'addRecipe' && (
        <AddRecipe
          fetchRecipes={fetchRecipes}
          filteredRecipes={filteredRecipes}
          setPageImLookingAt={setPageImLookingAt}
        />
      )}
      <div>
        {/* 
          <section>
            {filteredRecipes.map(recipe => (
              <div className="recipe">
                <h4>{recipe.name}</h4>
                <h5>{recipe.ingredients}</h5>
              </div>
            ))} */}
        {/* </section>
        </form> */} */}
      </div>
    </>
  )
}
