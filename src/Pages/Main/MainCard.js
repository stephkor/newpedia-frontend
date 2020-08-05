import React from 'react';
import {useState, useEffect} from 'react';
import {like} from './like.png'
import {dislike} from './dislike.png'



const MainCard = ({data, index}) => {
  return (
    <div className="MainCard" key={index}>
      <div className="card">
        <h1>{data && data.word_name}</h1>
        <p>{data && data.word_description}</p>
        <span>{data && data.word_example}</span>
        <button><img src={like}/></button>
        <button><img src={dislike}/></button>
      </div>
    </div>
  )
}

export default MainCard;