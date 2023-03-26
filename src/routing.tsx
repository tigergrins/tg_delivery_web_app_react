import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Menu from './pages/Menu/Menu'
import Footer from './components/Footer';


function MainRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path={routes.Menu} element={<Menu/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default MainRouter

export const history = createBrowserHistory()

const routes: {
  [key: string]: string;
} = {
  Menu: '/menu',
  Dish: '/dish',
  Basket: '/basket',
  Form: '/form'
}
