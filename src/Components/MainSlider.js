import React  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class MainSlider extends React.Component {
  render () {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (

      <Slider {...settings}>
        <div className="component" style={{backgroundColor: "yellow"}}>
          <div>
            <h3>단어</h3>
            <p>아마 여기에 뜻이 나오겠지?</p>
            <span>여기가 예시자리</span> 
          </div>
        </div>
        <div className="component">
          <div>
            <h3>단어</h3>
            <p>아마 여기에 뜻이 나오겠지?</p>
            <span>여기가 예시자리</span> 
          </div>
        </div>
        <div className="component">
          <div>
            <h3>단어</h3>
            <p>아마 여기에 뜻이 나오겠지?</p>
            <span>여기가 예시자리</span> 
          </div>
        </div>
        <div className="component">
          <div>
            <h3>단어</h3>
            <p>아마 여기에 뜻이 나오겠지?</p>
            <span>여기가 예시자리</span> 
          </div>
        </div>
        <div className="component">
          <div>
            <h3>단어</h3>
            <p>아마 여기에 뜻이 나오겠지?</p>
            <span>여기가 예시자리</span> 
          </div>
        </div>
      </Slider>

    )
  }
}