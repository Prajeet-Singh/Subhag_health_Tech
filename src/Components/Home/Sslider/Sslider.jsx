import React from 'react';
import './Sslider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from "../../../assets/im1.jpg"
import img2 from "../../../assets/imi1.jpg"
import img3 from "../../../assets/im3.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Sslider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    
    // transition: all 0.5s ease,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <div className="slick-prev"><i className="fas fa-chevron-left"></i></div>,
    nextArrow: <div className="slick-next"><i className="fas fa-chevron-right"></i></div>
  };

  return (
    <div className="slider-container" >
      <Slider {...sliderSettings}>
        
        <div className="slide-item">
          <img src={img2} alt="Slide 1" />
          <h5>Improve chance of conception with IUI <br></br>at Home.<br/><br /><div className="pr">Private, Comfortable and Effective</div></h5>
        <button className="slide-button">I M COUPLE </button>
           <p></p>
        </div>

        <div className="slide-item">
          <img src={img3} alt="Slide 2" />
          <div className="h">
          <h5>Improve chance of conception with IUI <br></br>at Home.<br/><br /><div className="pr">Private, Comfortable and Effective</div></h5>
          </div>
          <button className="slide-button">I M DOCTOR</button>
          
        </div>
        <div className="slide-item">
          <img src={img1} alt="Slide 3" />
          <h5 >Improve chance of conception with IUI <br></br>at Home.<br/><br /><div className="pr">Private, Comfortable and Effective</div></h5>
          <button className="slide-button">I M INVESTOR</button>
          
        </div>
        
      </Slider>
    </div>
  );
};

export default Sslider;
