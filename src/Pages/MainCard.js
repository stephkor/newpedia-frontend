import React from 'react';
import {useState, useEffect} from 'react';



const MainCard = () => {
    
  const [data, setData] = useState([]);
   
  useEffect(() => {
    fetch('mock.json')
    .then((res)=> res.json())
    .then((res) => {
      setData(res.dic_info)
    });
  },[])
  
  return (
    <div className="MainCard">
      <div className="card">
        <h1>단어</h1>
        <p>이자리에 뜻이 들어가게 됩니다 뜻이 굉장히 길 경우에 어떻게 되는지 궁금해 지는군요 할 공부도 많은데 이딴거나 쓰고있고 수민아 정신차리자</p>
        <span>여기에 예시가 들어가게 되는 것임. 예시는 한문장이면 되지 않을까</span>
      </div>
    </div>
  )
}

export default MainCard