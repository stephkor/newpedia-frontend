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
          <div className="category_select">
            <h1>카테고리</h1>
            <div className="select_form">
              <label><input type={"radio"} name='교육' value={'edu'}/>교육</label>
              <label><input type={"radio"} name='게임' value={'game'}/>게임</label>
              <label><input type={"radio"} name='커뮤니티' value={'community'}/>커뮤니티</label>
              <label><input type={"radio"} name='방송' value={'broadcast'}/>방송</label>
              <label><input type={"radio"} name='음식' value={'food'}/>음식</label>
              <label><input type={"radio"} name='음악' value={'music'}/>음악</label>
              <label><input type={"radio"} name='스포츠' value={'sports'}/>스포츠</label>
              <label><input type={"radio"} name='종교' value={'religion'}/>종교</label>
              <label><input type={"radio"} name='경제' value={'economy'}/>경제</label>
              <label><input type={"radio"} name='국가' value={'country'}/>국가</label>
              <label><input type={"radio"} name='과학기술' value={'sciencetech'}/>과학기술</label>
              <label><input type={"radio"} name='직업' value={'job'}/>직업</label>
              <label><input type={"radio"} name='문화' value={'culture'}/>문화</label>
            </div>
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
        
          <div className="register">
            <p>다음과 같이 등록하시겠습니까?</p>
            <span></span>
          </div>
      </section>
    
    </div>
  )
}

export default Register;