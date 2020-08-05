import React from 'react';
import {useState, useEffect} from 'react';
import likeImg from './like.png'
import dislikeImg from './dislike.png'



const MainCard = ({data, index}) => {
  const [like, setLike] = useState(data.word_like)
  const [click, setClick] = useState(true)
  const [dislike, setDislike] = useState (data.word_dislike)
  
  const onLike = () => {
    setLike(like + 1);
  }
  
  
  return (
    <div className="MainCard" key={index}>
      <div className="card">
        <h1>{data && data.word_name}</h1>
        <p>{data && data.word_description}</p>
        <span>{data && data.word_example}</span>
        <button onClick={onLike}><img src={likeImg}/> <span>{like}</span>   </button>
        <button><img src={dislikeImg}/> <span>{data.word_dislike}</span>  </button>
      </div>
    </div>
  )
}

export default MainCard;