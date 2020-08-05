import React  from 'react';
import Slider from "react-slick";
import {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  MainSlider = () => {
  
  const [data, setData] = useState([]);
   
  useEffect(() => {
    fetch('sliderWords.json')
    .then((res)=> res.json())
    .then((res) => {
      setData(res.sub_word_list)
    });
  },[])

  



    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true
    };


    return (
      <Slider {...settings} >
      {data.map((data, index)=> <div className="component" style={{backgroundColor: "yellow"}} key={index} data={data} >
          <div>
            <h3>{data.word_name}</h3>
            <p>{data.word_description.slice(0,80) + '...'}</p>
            <span>{data.word_example}</span>
          </div>
        </div>)}  
      </Slider>
    )
  }

  export default MainSlider;
