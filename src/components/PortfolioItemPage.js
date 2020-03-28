import React from "react"

const PortfolioItemPage = props => (
  <div>
    <h2>A thing I made</h2>
    <p>Item {props.match.params.id}</p>
  </div>
)

export default PortfolioItemPage