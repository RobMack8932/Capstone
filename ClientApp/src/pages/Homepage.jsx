import React, { useState } from 'react'
import '../custom.scss'
import { Route, Switch, Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import { Beef } from './Beef'
import { BeefAsian } from './BeefAsian'
import { BeefMexican } from './BeefMexican'
import { BeefItalian } from './BeefItalian'
import { Chicken } from './Chicken'
import { ChickenItalian } from './ChickenItalian'
import { ChickenAsian } from './ChickenAsian'
import { ChickenMexican } from './ChickenMexican'
import { Fish } from './Fish'
import { FishItalian } from './FishItalian'
import { FishAsian } from './FishAsian'
import { FishMexican } from './FishMexican'
import { Pork } from './Pork'
import { PorkItalian } from './PorkItalian'
import { PorkMexican } from './PorkMexican'
import { PorkAsian } from './PorkAsian'
import { Vegetarian } from './Vegetarian'
import { VegetarianItalian } from './VegetarianItalian'
import { VegetarianMexican } from './VegetarianMexican'
import { VegetarianAsian } from './VegetarianAsian'
import { Vegan } from './Vegan'
import { VeganItalian } from './VeganItalian'
import { VeganMexican } from './VeganMexican'
import { VeganAsian } from './VeganAsian'
export function Homepage() {
  const [activeFilter, setActiveFilter] = useState('')
  return (
    <>
      <main>
        <header>
          <div class="container">
            <h5>
              <Link to={'/'}>Home</Link>
            </h5>

            <nav>
              <ul>
                <li>
                  <Link to={'/Beef'}>Beef</Link>
                </li>
                <li>
                  <Link to={'/Chicken'}>Chicken</Link>
                </li>
                <li>
                  <Link to={'/Pork'}>Pork</Link>
                </li>
                <li>
                  <Link to={'/Fish'}>Fish</Link>
                </li>

                <li>
                  <Link to={'/Vegetarian'}>Vegetarian</Link>
                </li>
                <li>
                  <Link to={'/Vegan'}>Vegan</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <h1> -</h1>
        <div class="logo">
          <img src={logo} />
        </div>

        <p>
          Welcome to my application! Made to make the search for what to cook
          for dinner to be as <em>seamless</em> and <em>easy</em> as possible.
          <br />
          Here you'll select the main protein for the dish, followed by the
          nationality for the style of cooking for the dish, <br />
          accompanied by recipes and cooking instructions. I hope you enjoy this
          application and have a <strong>great meal</strong> tonight!
        </p>
        <p> Please select from the following options:</p>
        <div class="ProteinLinks">
          <ul>
            <Link className="btn btn-success mr-2" to={'/Beef'}>
              Beef
            </Link>
            <Link className="btn btn-success mr-2" to={'/Chicken'}>
              Chicken
            </Link>
            <Link className="btn btn-success mr-2" to={'/Pork'}>
              Pork
            </Link>
            <Link className="btn btn-success mr-2" to={'/Fish'}>
              Fish
            </Link>
            <Link className="btn btn-success mr-2" to={'/Vegetarian'}>
              Vegetarian
            </Link>
            <Link className="btn btn-success mr-2" to={'/Vegan'}>
              Vegan
            </Link>
            <br />
          </ul>
        </div>
      </main>
    </>
  )
}
