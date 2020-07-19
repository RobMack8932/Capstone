import React, { useState} from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import logo from './images/Logo.png'
import { Beef } from './pages/Beef'
export function App() {
  const [activeFilter, setActiveFilter] = useState ('')
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Beef />
        </Route>
      </Switch>
      <Route path="/Beef">
      </Beef>
      </Route>
      <main>
        <br />
        <body>
          <div class="logo">
            <img src={logo} />
          </div>
          <p>
            Welcome to my application! Made to make the search for what to cook
            for dinner to be as <em>seamless</em> and <em>easy</em> as possible.
            <br />
            Here you'll select the main protein for the dish, followed by the
            nationality for the style of cooking for the dish, <br />
            accompanied by recipes and cooking instructions. I hope you enjoy
            this application and have a <strong>great meal</strong> tonight!
          </p>
          <p> Please select from the following options:</p>
          <div class="ProteinLinks">
            <ul>
              <form className="form-inline my-2 my-lg-0">
              <Link className="btn btn-success mr-2" to=*/Beef">
              + Add </form>
              </Link>
               <br /> 
              <a href="url">Chicken</a> <br />
              <a href="url">Pork</a>
              <br />
              <a href="url">Vegetarian</a>
              <br />
              <a href="url">Vegan</a>
              <br />
            </ul>
          </div>
        </body>
      </main>
    </>
  )
}