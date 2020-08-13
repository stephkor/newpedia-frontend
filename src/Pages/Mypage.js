import React, { useState, useEffect } from 'react';
import LoginModal from "Components/Modal";
import './Mypage.scss'
import { Link } from 'react-router-dom'
import MyPage from "../Pages/Main/my_ico.png"

const Mypage = () => {
	const [nickName, setNickname] = useState("")
	const [newNickname, setNewNickname] = useState("");
	
	useEffect (() => {
		fetch('http://10.58.2.97:8000/account/nickname', {
			headers: {'Authorization' : localStorage.getItem('token')}
		})
			.then((res)=> res.json())
			.then(res => setNickname(res.nickname))
	 },[])
	
	

	

	useEffect(() => {
		fetch(`nickname.json`)
			.then((res)=> res.json())
			.then((res) => {
				setNickname(res.nickname)
			});
	},[])

	
	const newnickname = (e) => {
		setNewNickname(e.target.value)
	}
	
	const toMain = () => {
		window.location.replace('/')
	}
	
	const editNickname = () => {
		let home = 'http://localhost:3000/';
		let mypage = "http://localhost:3000/mypage"
		fetch('http://10.58.2.97:8000/account/nickname', {
			method: 'POST',
			headers : {'Authorization' : localStorage.getItem('token')},
			body: JSON.stringify({"nickname" : newNickname})
	})
			.then((res)=>
			{if (res.status === 200) {
				alert('닉네임이 성공적으로 변경되었습니다.')
				toMain();
			}
				else if (res.status === 401) {
					alert('닉네임은 한글, 1~12 글자로 작성 해주세요')
				}
	})
}

	
	
	return (
		<section className="Mypage">
				<header>
					<div className="nav_top_wrapper">
						<ul className="nav_top">
							<li>안녕하세요</li>
							<li className="user_name">뉴피디아 님</li>
							<Link to="/mypage"><li><img src={MyPage} alt="mypage_Icon" /></li></Link>
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
			
			<section className="MyPage_main">
				<aside>
					<ul>
						<li>닉네임 수정</li>
					</ul>
				</aside>
				<main>
					<h1>닉네임 수정</h1>
					<div className="edit_nickname">
						<h2>현재 닉네임</h2>
						<p>{nickName}</p>
						<h2>새로운 닉네임</h2>
						<input placeholder="새로운 닉네임을 입력해주세요" onChange={(e)=>newnickname(e)}/>
					</div>
					
					<button onClick={()=>editNickname()}> 수정 </button>
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
		</section>
	)
}

export default Mypage;