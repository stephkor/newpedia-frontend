import React, {useState, useEffect}  from 'react';
import {GrEdit} from "react-icons/gr"
import {Link} from "react-router-dom"
import LoginModal from "Components/Modal";
import MainSlider from "Components/MainSlider";
import MainCard from "./MainCard";
import MyPage from "./my_ico.png"
import Bird from'./bird.png'
import Background from "./background.png"
import YellowDot from "./yellowdot.png"
import "./Main.scss";




const Main = () => {
  const [page, setPage] = useState(1);
  const [nickname, setNickname] = useState("");
  const [search, setSearch] = useState("")
  const [mainWord, setMainWord] = useState([]);
  const [prevWord, setPrevWord] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [wordList, setWordList] = useState([]);
  
  document.cookie = 'cookie2=value2; SameSite=None; Secure';
  

  // useEffect(() => {
  //   fetch('http://10.58.0.113:8000/word/list')
  //     .then((res)=> res.json())
  //     .then((res) => {
  //       setMainWord(res.word_list)
  //     });
  // },[])
  //

  useEffect(() => {
    fetch(`http://3.34.131.76:8000/word/list?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPrevWord(res.word_list)
      })
  },[])
  
 const clickMore = () => {
    setPage(page + 1)
    fetch(`http://3.34.131.76:8000/word/list?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setWordList(res.word_list)
        setPrevWord(prevWord.concat(wordList))
      })
  }

  useEffect (() => {
    fetch('http://3.34.131.76:8000/account/nickname', {
      headers: {'Authorization' : localStorage.getItem('token')}
    })
      .then((res)=> res.json())
      .then(res => setNickname(res.nickname))
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

  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const searchWords = () => {
    fetch(`http://3.34.131.76:8000/word/list/search?search_word=${search}`)
      .then(res => res.json())
      .then (res => {setSearchData(res.search_list)})
  }

  
  return (
    <div className="Main">
      <Link exact to="/register"><button className="regi">
        <GrEdit/>
      </button></Link>
      <header>
        <div className="nav_top_wrapper">
      		<ul className="nav_top">
      			<li>안녕하세요</li>
      			<li className="user_name">{nickname}</li>
            <Link exact to="/mypage"><li><img src={MyPage} alt="mypage_Icon" /></li></Link>
            <li><LoginModal/></li>
      		</ul>
        </div>
        <div className="nav_bottom">
          <div className="logo">
            <p>NEWPEDIA</p>
          </div>
          <ul className="nav_menu">
            <li>최신순</li>
            <li>인기순</li>
            <li>글자별</li>
            <li>주제별</li>
            <li>테스트</li>
            <li>아이콘</li>
          </ul>
        </div>
      </header>
      <section className="main_top_wrap">
        <div className="main_top">
          <img src={YellowDot} className="dot_small" />
          <img src={YellowDot} className="dot_large" />
          <div className="narr">
            <h2>내가 궁금했던, 새로운 단어들까지,</h2>
            <h1><span>오늘의 신조어</span>를 확인하세요.</h1>
          </div>  
          <div className="search">
            <input placeholder="단어를 검색해보세요" onChange={(e)=>handleSearch(e)} onKeyUp={searchWords}/>
              <div className="SearchResult" style ={{display: searchData ? "block" : "none" }}>
                {searchData && searchData.map((data,index) =>
                  <div className="result" key={index} data={data} index={index}>
                    <p>{data && data.word_name}</p>
                    <span>{data && " - " + descriptionCut(data)}</span>
                  </div>)}
              </div>
          </div>
        </div>
        <MainSlider className="main_top_slider" />
      </section>
      <div className="middle_info">
        <p>뉴피디아는 그동안 당신이 궁금했던, 그리고 몰랐던 새로운 신조어들을 제공합니다.<br/>
         <br/> 빠르게 생성되고 사라지는 신조어들 중 알고 싶지만 정확하게 그 뜻을 찾기 어려웠던 신조어들. 지금 바로 만나보세요!
        </p>
        <div className="background">
          <img src={Bird}/>
        </div>
      </div>
      
      <section className="main_card_wrap">
        <main className="main_card">
          <div className="card_filter">
            <p>나는 지금 
              <select>
                <option value="최신순">최신순</option>
                <option value="인기순">인기순</option>
              </select>
            으로 보고싶어요
            </p> 
          </div>
          <div className="card_list">
            {prevWord && prevWord.map((data,index)=> <MainCard data={data} index={index} key={index} /> )}
          </div>
        </main>
        <button className="showmore" onClick={()=>clickMore()}>더보기</button>
      </section>


      <footer>
        <div className="logo">
          <p>NEWPEDIA</p>
        </div>
        <div className="info">
          <p>stephkor@icloud.com</p>
          <span>오류나 기타 건의사항은 메일로 보내주세요!</span>
        </div>
      </footer> 
    </div>
  );
}

export default Main;
