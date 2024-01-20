import React, { Component } from 'react'
import Navbarcomp from './Navbarcomp'
import { Carousel } from 'bootstrap'

export default class BookMyShow extends Component {
  render() {
    return (
      <div>
        <Navbarcomp/>
        <img className="car" src="https://i.ibb.co/ZGsJ3dh/jio-mami-21st-mumbai-film-festival-with-star-2019-02-09-2019-10-58-45-992.png" alt="First slide"/>
        {/*<Carousel/>*/}
      </div>
    )
  }
}
