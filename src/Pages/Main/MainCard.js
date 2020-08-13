import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import likeImg from './like.png'
import dislikeImg from './dislike.png'


const MainCard = ({data, index}) => {

  const [like, setLike] = useState(data.word_like);
  const [dislike, setDislike] = useState(data.word_dislike);
  const [click, setClick] = useState(true);
  const [category, setCategory] = useState(data.word_category);
  
 const onLike = () => {
  fetch(`http://10.58.0.113:8000/word/${data.word_id}/like`, {
      method: 'POST',
    headers: { Authorization : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.Sj80GQrZjMkZQ7ofkOTWpkFd1W9W5B9Is9WezpY6d_c'}
  })
    .then((res)=>res.json())
    .then((res)=> {
      setLike(res.word_like)}
      ,[])
  };

  const onDisLike = () => {
    fetch(`http://10.58.0.113:8000/word/${data.word_id}/dislike`, {
      method: 'POST',
      headers: { Authorization : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.Sj80GQrZjMkZQ7ofkOTWpkFd1W9W5B9Is9WezpY6d_c'}
    })
      .then((res)=> {setDislike(res.word_dislike)
      });
  }
  

  
  return (
    <div className="MainCard" key={index}>
      <div className="card">
        <h1>{data && data.word_name}</h1>
        <p>{data && data.word_description}</p>
        <span>{data && data.word_example}</span>
        <h4>{category.toString()}</h4>
        <button onClick={onLike}><img src={likeImg}/><span className="like_num"> {like}</span></button>
        <button onClick={onDisLike}><img src={dislikeImg}/> <span className="dislike_num"> {dislike}</span></button>
      </div>
    </div>
  )
}

export default MainCard;