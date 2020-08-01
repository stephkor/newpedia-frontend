import React from 'react';
import "./Main.scss";
import LoginModal from "Components/Modal";
import MainSlider from "Components/MainSlider";
import MainCard from "../src/Pages/MainCard";




const Main = () => {
  
  return (
    <div className="Main">
      <header>
        <div className="nav_top_wrapper">
      		<ul className="nav_top">
      			<li>안녕하세요</li>
      			<li className="user_name">뉴피디아 님</li>
      			<li> 아이콘자리</li>
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
          <div>
            <h2>내가 궁금했던, 새로운 단어들까지,</h2>
            <h1><span>오늘의 신조어</span>를 확인하세요.</h1>
          </div>  
          <div className="search">
            <input placeholder="단어를 검색해보세요" />
          </div>
        </div>
        <MainSlider className="main_top_slider" />
        <div className="middle_info">
          <p>뉴피디아는 그동안 당신이 궁금했던, 그리고 몰랐던 새로운 신조어들을 제공합니다.<br/>
          빠르게 생성되고 사라지는 신조어들 중 알고 싶지만 정확하게 그 뜻을 찾기 어려웠던 신조어들. 지금 바로 만나보세요!
          </p>
        </div>
      </section>

      <section className="main_card_wrap">
        <main className="main_card">
          <div className="card_filter">
            <p>나는 지금 
              <select>
                <option value="최신순">최신순 </option>
                <option value="인기순"> 인기순 </option>
              </select>
            으로 보고싶어요
            </p> 
          </div>
          <div className="card_list">
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
          </div>
        
        
        </main>
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
