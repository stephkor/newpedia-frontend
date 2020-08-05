import React from 'react';
import {useState, useEffect} from 'react';



const MainCard = ({data, index}) => {
  return (
    <div className="MainCard" >
      <div className="card">
        <h1>{data && data.word_name}</h1>
        <p>{data && data.word_description.slice(0,100) + '...'}</p>
        <span>{data && data.word_example}</span>
      </div>
    </div>
  )
}

export default MainCard