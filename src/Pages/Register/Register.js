import React from 'react';
import "styles/reset.scss";
import "styles/common.scss";
import "./Register.scss"

const Register = () => {
  return (
    <div className="Register">
      <header>
        <div className="nav_top_wrapper">
      		<ul className="nav_top">
      			<li>안녕하세요</li>
      			<li className="user_name">뉴피디아 님</li>
      			<li> 아이콘자리</li>
            <li>로그아웃</li>
      		</ul>
        </div>
        <div className="logo">
          <p>NEWPEDIA</p>
        </div>
        <div className="nav_bottom">
          <p>새로운 신조어를 추가해보세요</p>
        </div>
      </header>
      <section className="reg_main_wrap">
        <main>
          <div className="reg_form">
            <h1>단어</h1>
            <input placeholder="단어를 입력해주세요." />
          </div>
          <div>
            <h1>설명</h1>
            <textarea placeholder="설명을 입력해주세요"/>
          </div>
          <div>
            <h1>예시</h1>
            <textarea placeholder="예시를 입력해 주세요"/>
          </div>
        </main>
      </section>
    
    </div>
  )
}

export default Register;