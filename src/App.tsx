import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './normalize.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProductsList from './components/Products/ProductsList'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SingleProduct from './components/Products/SingleProduct'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route path="/about" component={About} />
            <Route path="/products/:id" component={SingleProduct} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
