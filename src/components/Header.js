import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink>
    <NavLink activeClassName="is-active" to="/Contact">Contact</NavLink>
    <NavLink activeClassName="is-active" to="/Portfolio">Portfolio</NavLink>
  </div>
)

export default Header