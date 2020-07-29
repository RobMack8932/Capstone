import React, { useState } from 'react'
import '../custom.scss'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
//import logo from '../images/Logo.png'
export function AddRecipe(props) {
  const history = useHistory()
  const [recipe, SetRecipe] = useState({
    name: '',
    nationality: '',
    proteinGroup: '',
    ingredients: '',
    steps: '',
    cookingTime: '',
  })

  function handleNameChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      name: event.target.value,
    })
  }

  function handleNationalityChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      nationality: event.target.value,
    })
  }

  function handleProteinGroupChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      proteinGroup: event.target.value,
    })
  }

  function handleIngredientsChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      ingredients: event.target.value,
    })
  }

  function handleStepsChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      steps: event.target.value,
    })
  }

  function handleCookingTimeChange(event) {
    const value = event.target.value
    SetRecipe({
      ...recipe,
      cookingTime: event.target.value,
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    fetch('/api/Recipes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(recipe),
    }).then(response => response.json())
    props.fetchRecipes()
    props.setPageImLookingAt('protein')
  }

  return (
    <>
      <main>
        <body>
          <div className="format"></div>
          <p>Add another recipe for other users to cook tonight!</p>
          <form action="" method="get" class="Form" onSubmit={handleSubmit}>
            <div class="Form">
              <label for="name">Enter the recipe's name: </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={recipe.name}
                onChange={handleNameChange}
              />{' '}
            </div>
            <div class="Form">
              <label for="proteinGroup">Enter the protein group: </label>
              <input
                type="text"
                name="proteinGroup"
                id="proteinGroup"
                required
                value={recipe.proteinGroup}
                onChange={handleProteinGroupChange}
              />{' '}
            </div>{' '}
            <div class="Form">
              <label for="Nationality">Enter the nationality: </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                required
                value={recipe.nationality}
                onChange={handleNationalityChange}
              />
            </div>
            <div class="Form">
              <label for="ingredients">Enter the recipe's ingredients: </label>
              <textarea
                name="ingredients"
                id="ingredients"
                required
                value={recipe.ingredients}
                onChange={handleIngredientsChange}
              />{' '}
            </div>
            <div class="Form">
              <label for="steps">Enter the recipe's cooking steps:</label>
              <textarea
                name="steps"
                id="steps"
                required
                value={recipe.steps}
                onChange={handleStepsChange}
              />{' '}
            </div>
            <div class="Form">
              <label for="cookingTime">
                Enter the necessary cooking time:{' '}
              </label>
              <input
                type="text"
                name="cookingTime"
                id="cookingTime"
                required
                value={recipe.cookingTime}
                onChange={handleCookingTimeChange}
              />{' '}
              <div class="Form">
                <input type="Submit" />{' '}
              </div>
            </div>
          </form>
          <footer>Made with love by Rob Mack EST 2020</footer>
        </body>
      </main>
    </>
  )
}
