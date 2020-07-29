import React, { useState } from 'react'
import '../custom.scss'
import { Link } from 'react-router-dom'
//import logo from '../images/Logo.png'
export function Nationalities(props) {
  const [pageImLookingAt, setPageImLookingAt] = useState('nationality')
  return (
    <>
      <main>
        <body>
          <p>Now, please select a nationality</p>
          <div class="ProteinLinks">
            <ul>
              <form>
                <button
                  className="color"
                  id="nationality"
                  value="Italian"
                  onClick={event => {
                    event.preventDefault()
                    props.setPageImLookingAt('recipes')
                    props.setNationality(event.target.value)
                  }}
                >
                  Italian
                </button>

                <button
                  className="color"
                  id="nationality"
                  value="Asian"
                  onClick={event => {
                    event.preventDefault()
                    props.setPageImLookingAt('recipes')
                    props.setNationality(event.target.value)
                  }}
                >
                  Asian
                </button>

                <button
                  className="color"
                  id="nationality"
                  value="Mexican"
                  onClick={event => {
                    event.preventDefault()
                    props.setPageImLookingAt('recipes')
                    props.setNationality(event.target.value)
                  }}
                >
                  Mexican
                </button>
              </form>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <footer>Made with love by Rob Mack EST 2020</footer>
        </body>
      </main>
    </>
  )
}
