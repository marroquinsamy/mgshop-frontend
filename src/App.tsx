import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './normalize.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProductsList from './components/Products/ProductsList'
import About from './components/About/About'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
