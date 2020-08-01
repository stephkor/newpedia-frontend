import React  from 'react';
import Slider from "react-slick";
import {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  MainSlider = () => {
  
  const [data, setData] = useState([]);
   
  useEffect(() => {
    fetch('mock.json')
    .then((res)=> res.json())
    .then((res) => {
      setData(res.dic_info)
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
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
            <span>{data.example}</span> 
          </div>
        </div>)}  
      </Slider>
    )
  }

  export default MainSlider;
