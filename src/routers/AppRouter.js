import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ContactPage from "../components/ContactPage"
import Header from "../components/Header"
import HomePage from "../components/HomePage"
import NotFoundPage from "../components/NotFoundPage"
import PortfolioPage from "../components/PortfolioPage"
import PortfolioItemPage from "../components/PortfolioItemPage"

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} exact={true} path="/" />
        <Route component={ContactPage} path="/contact" />
        <Route component={PortfolioPage} path="/portfolio" exact={true} />
        <Route component={PortfolioItemPage} path="/portfolio/:id" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter