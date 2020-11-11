import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ProductsList from './components/Products/ProductsList'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SingleProduct from './components/Products/SingleProduct'
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const copyWhatsApp = () => {
    try {
      navigator.clipboard.writeText('+502 4269 5893')
      toast.info('Nuestro WhatsApp: +502 4269 5893')
      toast.success('WhatsApp copiado exitosamente')
    } catch (error) {
      console.log(error)
      toast.info('Nuestro WhatsApp: +502 4269 5893')
    }
  }

  return (
    <div id="app">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route path="/about">
              <About copyWhatsApp={copyWhatsApp}></About>
            </Route>
            <Route path="/products/:id" component={SingleProduct} />
          </Switch>
          <ToastContainer position="bottom-right" />
        </div>
        <Footer copyWhatsApp={copyWhatsApp} />
      </BrowserRouter>
    </div>
  )
}

export default App
