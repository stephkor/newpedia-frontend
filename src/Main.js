import React from 'react';
import "./Main.scss";
import "./styles/common.scss";


const Main = () => {
  return (
    <div className="Main">
      <nav>
      		<ul className="nav_top">
      			<li>안녕하세요</li>
      			<li className="user_name">뉴피디아 님</li>
      			<li> 아이콘자리</li>
            <li>로그아웃</li>
      		</ul>
          <div className="nav_main_wrap">
            <div className="logo_wrap">
              
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
      </nav>
    </div>
  );
}

export default Main;
