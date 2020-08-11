import React, {useState, useEffect} from 'react';
import "styles/reset.scss";
import "styles/common.scss";
import "./Register.scss"


const Register = () => {
  const [nickname, setNickname] = useState("");
  const [category, setCategory] = useState([]);
  
  useEffect(()=>{
    fetch('10.58.0.113:8000/account/nickname', {
    headers: {Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.Sj80GQrZjMkZQ7ofkOTWpkFd1W9W5B9Is9WezpY6d_c'}
  })
.then((res)=> res.json())
    .then((res) => setNickname(res.nickname));
})
  
  useEffect(()=>{
    fetch('10.58.0.113:8000/word/category?menu_id=1')
      .then((res)=> res.json())
      .then((res) => setCategory(res.category_list))
      .then((res)=> console.log(res))
  })
  ;
  
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
            <span>[{nickname}] 의 이름으로 등록됩니다</span>
            <div>
              <button className="reg_btn">등록취소</button>
              <button className="reg_cancel_btn">등록완료</button>
            </div>
          </div>
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
    
  )
}

export default Register;