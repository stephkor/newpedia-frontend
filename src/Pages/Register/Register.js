import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import MyPage from "../Main/my_ico.png"
import "styles/reset.scss";
import "styles/common.scss";
import "./Register.scss"


const   Register  = () => {
  const [nickname, setNickname] = useState("");
  const [category, setCategory] = useState([]);
  const [clickCategory, setClickCategory] = useState([]);
  const [checked, setChecked] = useState(false);
  const [wordName, setWordName] = useState("");
  const [wordDescription, setWordDescription] = useState("");
  const [wordExample, setWordExample] = useState("");

  useEffect(()=>{
    fetch('http://10.58.0.113:8000/account/nickname', {
    headers: {Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.Sj80GQrZjMkZQ7ofkOTWpkFd1W9W5B9Is9WezpY6d_c'}
  })
.then((res)=> res.json())
    .then((res) => setNickname(res.nickname));
},[])


  

  useEffect(()=>{
    fetch('http://10.58.0.113:8000/word/category?menu_id=4')
      .then((res)=> res.json())
      .then((res) => setCategory(res.category_list))
  },[])

  const onCategoryClick = (e) => {
    setChecked(!checked);
    setClickCategory(e.target.value);
  }
  
  const isWordName = (e) => {
    setWordName(e.target.value)
  }
  
  const isWordDescription = (e) => {
    setWordDescription(e.target.value)
  }
  
  const isWordExample = (e) => {
    setWordExample(e.target.value)
  }
  
  
  const registerWord = () => {
    fetch('http://10.58.0.113:8000/word/new', {
      method: 'POST',
      headers: {Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.Sj80GQrZjMkZQ7ofkOTWpkFd1W9W5B9Is9WezpY6d_c'},
      body: {
        "name" : wordName,
        "description" : wordDescription,
        "example" : wordExample,
      }
    }
  )
      .then(window.location.href('http://localhost:3000'))
  }
  
  
  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };
  const deleteConfirm = () => window.location.reload();
  const cancelConfirm = () => alert("마저 작성");
  const confirmDelete = useConfirm(
    "등록을 취소하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );
  
  
  return (
    <div className="Register">
      <header>
        <div className="nav_top_wrapper">
      		<ul className="nav_top">
      			<li>안녕하세요</li>
      			<li className="user_name">뉴피디아 님</li>
            <Link to="/mypage"><li><img src={MyPage} alt="mypage_Icon" /></li></Link>
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
            <input placeholder="단어를 입력해주세요." onChange={(e)=>isWordName(e)}  />
          </div>
          <div className="category_select">
            <h1>카테고리</h1>
            <div className="select_form">
              {category && category.map((data,index)=>
                <label data={data} key={index}>
                  <input type={"checkbox"} name={data.category_name} value={data.category_name}  onChange={(e)=>onCategoryClick(e)} />
                  {data.category_name}
                  </label>)}
            </div>
          </div>
          <div>
            <h1>설명</h1>
            <textarea placeholder="설명을 입력해주세요" onChange={(e)=> isWordDescription(e)}/>
          </div>
          <div>
            <h1>예시</h1>
            <textarea placeholder="예시를 입력해 주세요" onChange={(e)=> isWordExample(e)}/>
          </div>
        </main>

          <div className="register">
            <p>다음과 같이 등록하시겠습니까?</p>
            <span>[{nickname}] 의 이름으로 등록됩니다</span>
            <div>
              <button className="reg_btn" onClick={()=>confirmDelete()} >등록취소</button>
              <button className="reg_cancel_btn" onClick={()=>registerWord()}>등록완료</button>
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