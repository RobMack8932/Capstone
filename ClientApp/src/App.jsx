import React, { useState } from 'react'
import './custom.scss'
import { Route, Switch } from 'react-router-dom'
import logo from './images/Logo.png'
import { Beef } from './pages/Beef'
import { BeefAsian } from './pages/BeefAsian'
import { BeefMexican } from './pages/BeefMexican'
import { BeefItalian } from './pages/BeefItalian'
import { Chicken } from './pages/Chicken'
import { ChickenItalian } from './pages/ChickenItalian'
import { ChickenAsian } from './pages/ChickenAsian'
import { ChickenMexican } from './pages/ChickenMexican'
import { Fish } from './pages/Fish'
import { FishItalian } from './pages/FishItalian'
import { FishAsian } from './pages/FishAsian'
import { FishMexican } from './pages/FishMexican'
import { Pork } from './pages/Pork'
import { PorkItalian } from './pages/PorkItalian'
import { PorkMexican } from './pages/PorkMexican'
import { PorkAsian } from './pages/PorkAsian'
import { Vegetarian } from './pages/Vegetarian'
import { VegetarianItalian } from './pages/VegetarianItalian'
import { VegetarianMexican } from './pages/VegetarianMexican'
import { VegetarianAsian } from './pages/VegetarianAsian'
import { Vegan } from './pages/Vegan'
import { VeganItalian } from './pages/VeganItalian'
import { VeganMexican } from './pages/VeganMexican'
import { VeganAsian } from './pages/VeganAsian'
import { Homepage } from './pages/Homepage'
export function App() {
  const [activeFilter, setActiveFilter] = useState('')
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/Beef" component={Beef} />
      <Route path="/BeefAsian" component={BeefAsian} />
      <Route path="/BeefMexican" component={BeefMexican} />
      <Route path="/BeefItalian" component={BeefItalian} />
      <Route path="/Chicken" component={Chicken} />
      <Route path="/ChickenAsian" component={ChickenAsian} />
      <Route path="/ChickenItalian" component={ChickenItalian} />
      <Route path="/ChickenMexican" component={ChickenMexican} />
      <Route path="/Fish" component={Fish} />
      <Route path="/FishAsian" component={FishAsian} />
      <Route path="/FishItalian" component={FishItalian} />
      <Route path="/FishMexican" component={FishMexican} />
      <Route path="/Pork" component={Pork} />
      <Route path="/PorkAsian" component={PorkAsian} />
      <Route path="/PorkItalian" component={PorkItalian} />
      <Route path="/PorkMexican" component={PorkMexican} />
      <Route path="/Vegetarian" component={Vegetarian} />
      <Route path="/VegetarianAsian" component={VegetarianAsian} />
      <Route path="/VegetarianItalian" component={VegetarianItalian} />
      <Route path="/VegetarianMexican" component={VegetarianMexican} />
      <Route path="/Vegan" component={Vegan} />
      <Route path="/VeganAsian" component={VeganAsian} />
      <Route path="/VeganItalian" component={VeganItalian} />
      <Route path="/VeganMexican" component={VeganMexican} />
    </Switch>
  )
}
export default App
