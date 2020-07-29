import React, { useState } from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import logo from './images/Logo.png'
import { Homepage } from './pages/Homepage'
import { FilterRecipes } from './pages/FilterRecipes'
export function App() {
  const [activeFilter, setActiveFilter] = useState('')
  return (
    <Switch>
      <Route exact path="/">
        <FilterRecipes />
      </Route>
    </Switch>
  )
}
export default App
