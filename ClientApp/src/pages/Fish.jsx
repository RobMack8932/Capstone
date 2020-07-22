import React from 'react'
import '../custom.scss'
import { Link } from 'react-router-dom'
//import logo from '../images/Logo.png'
export function Fish() {
  return (
    <>
      <main>
        <body>
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
                    <Link to={'/Fish'}>Fish</Link>
                  </li>
                  <li>
                    <Link to={'/Pork'}>Pork</Link>
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
          <p>Fish</p>
          <div class="ProteinLinks">
            <Link className="btn btn-success mr-2" to={'/FishItalian'}>
              Italian
            </Link>
            <Link className="btn btn-success mr-2" to={'/FishAsian'}>
              Asian
            </Link>
            <Link className="btn btn-success mr-2" to={'/FishMexican'}>
              Mexican
            </Link>
          </div>
        </body>
      </main>
    </>
  )
}
