import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
export default class Carausel extends Component {
  render() {
    return (
      <div className='cousel'>
        
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://i.ibb.co/ZGsJ3dh/jio-mami-21st-mumbai-film-festival-with-star-2019-02-09-2019-10-58-45-992.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.ibb.co/wRr7W1P/hustlers-01-10-2019-05-09-55-486.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.ibb.co/qFWPRpF/laal-kaptaan-16-10-2019-12-48-06-721.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
        
      </div>
    )
  }
}
