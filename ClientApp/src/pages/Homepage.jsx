import React, { useState } from 'react'
import '../custom.scss'
import { Route, Switch, Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import { AddRecipe } from './AddRecipe'
import { Nationalities } from './Nationalities'
import { Recipes } from './Recipes'

export function Homepage(props) {
  console.log(props.setProtein)
  return (
    <>
      <main>
        <br />

        <h3>Welcome to my application!</h3>
        <p>
          Made to make the search for what to cook for dinner to be as{' '}
          <em>seamless</em> and <em>easy</em> as possible.
          <br />
          Here you'll select the main protein for the dish, followed by the
          nationality for the style of cooking for the dish, <br />
          accompanied by recipes and cooking instructions. I hope you enjoy this
          application and have a <strong>great meal</strong> tonight!
        </p>
        <p> Please select from the following options:</p>
        <div className="ProteinLinks">
          <ul>
            <form>
              <label htmlFor="protein"></label>
              <button
                className="color"
                id="protein"
                value="Chicken"
                onClick={event => {
                  event.preventDefault()
                  props.setPageImLookingAt('nationality')
                  props.setProtein(event.target.value)
                }}
              >
                Chicken
              </button>

              <button
                className="color"
                id="protein"
                value="Beef"
                onClick={event => {
                  event.preventDefault()
                  props.setPageImLookingAt('nationality')
                  props.setProtein(event.target.value)
                }}
              >
                Beef
              </button>

              <button
                className="color"
                id="protein"
                value="Pork"
                onClick={event => {
                  props.setPageImLookingAt('nationality')
                  event.preventDefault()
                  props.setProtein(event.target.value)
                }}
              >
                Pork
              </button>

              <button
                className="color"
                id="protein"
                value="Fish"
                onClick={event => {
                  event.preventDefault()
                  props.setPageImLookingAt('nationality')
                  props.setProtein(event.target.value)
                }}
              >
                Fish
              </button>

              <button
                className="color"
                id="protein"
                value="Vegetarian"
                onClick={event => {
                  event.preventDefault()
                  props.setPageImLookingAt('nationality')
                  props.setProtein(event.target.value)
                }}
              >
                Vegetarian
              </button>

              <button
                className="color"
                id="protein"
                value="Vegan"
                onClick={event => {
                  event.preventDefault()
                  props.setPageImLookingAt('nationality')
                  props.setProtein(event.target.value)
                }}
              >
                Vegan
              </button>
            </form>
            <br />
          </ul>
        </div>
        <footer>Made with love by Rob Mack EST 2020</footer>
      </main>
    </>
  )
}
