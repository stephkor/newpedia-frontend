import React  from 'react';
import Slider from "react-slick";
import {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  MainSlider = () => {
  
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
   
  useEffect(() => {
    fetch('http://10.58.4.149:8000/word/list')
      .then((res)=> res.json())
      .then((res) => {
        setData(res.word_list.slice(0,30))
        setCategory(res.word_list.word_category)
      });
  },[])

  const descriptionCut = (data) => {
    let result;
      if (data.word_description.length > 80) {
        result = data.word_description.slice(0, 80) + '...'
      } else {
        result = data.word_description
      }
      return result;
    }
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
            <p><span> 	뜻&#41; </span> <br/>{descriptionCut(data)}</p>
            <h4>{data.word_example}</h4>
            <span style={{backgroundColor: "#e8e8e8", padding: "5px", borderRadius: "25px",  }}>{data.word_category.toString()}</span>
          </div>
        </div>)}  
      </Slider>
    )
  }

  export default MainSlider;
