import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    // render() {
        return (
            /*
            <div className='bannerParent'> 
             <Carousel styles={{maxHeight:"200px",maxWidth:"200px"}} className='banner'>
                <div>
                    <img src="assets/img/banner.webp" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 
            <div className='banner'></div>
            </div>
        */
        <>
     <div style={{
        height :"120px",
       backgroundColor:"rgba(26, 24, 22, 0.6)",

     }}>

     </div>
<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img alt="Diwali Special offer banner" 
      src="assets/img/banner.webp" class="d-block w-100" />
    </div>

  </div>
  

</div>

        </>
        );
    // }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default Banner;