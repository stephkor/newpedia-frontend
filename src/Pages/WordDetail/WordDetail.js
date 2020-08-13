import React , {useEffect, useState}from 'react';
import {Link} from "react-router-dom"
import LoginModal from "Components/Modal";
import MyPage from "../Main/my_ico.png"
import likeImg from '../Main/like.png'
import dislikeImg from '../Main/dislike.png'
import YellowDot from "../Main/yellowdot.png"
import './WordDetail.scss';


const WordDetail = (match) => {
	const [search, setSearch] = useState("");
	const [searchData, setSearchData] = useState([]);
	const [detail, setDetail] = useState([]);
	const [like, setLike] = useState(0);
	const [dislike, setDislike] = useState(0);
	const [category, setCategory] = useState([])

	
	useEffect(()=>{
		let id = match.params;
		fetch(`http://10.58.2.97:8000/word/1`)
			.then((res)=> res.json())
			.then((res)=> setDetail(res.word_info))
	},[])
	
	// useEffect(()=>{
	// 		fetch(`wordDetail.json`)
	// 			.then((res)=> res.json())
	// 			.then((res)=>setDetail(res.word_info))
	// 			.then((res)=>setCategory(res.word_info.category))
	// 	}
	// )


	
	const handleSearch = (e) => {
		setSearch(e.target.value)
	}
	const descriptionCut = (data) => {
		let result;
		if (data.word_description.length > 80) {
			result = data.word_description.slice(0, 80) + '...'
		} else {
			result = data.word_description
		}
		return result;
	}
	
	
	const searchWords = () => {
		fetch('http://3.34.131.76:8000/search/list', {
			method: 'POST',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify({"search_word" : search})
		})
			.then(res => res.json())
			.then (res => {setSearchData(res.search_list)})
	}
	
	const onLike = () => {
		fetch('mainWordList.json')
			.then((res)=> {
				setLike(res.word_like)}
			)
	};
	
	const onDisLike = () => {
		fetch('mainWordList.json')
			.then((res)=> {setDislike(res.word_dislike)
			});
	}
	
return(
	<div className="WordDetail" >
		<header>
			<div className="nav_top_wrapper">
				<ul className="nav_top">
					<li>안녕하세요</li>
					<li className="user_name"></li>
					<li><img src={MyPage} alt="mypage_Icon" /></li>
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
				<div className="narr">
					<h2>내가 궁금했던, 새로운 단어들까지,</h2>
					<h1><span>오늘의 신조어</span>를 확인하세요.</h1>
				</div>
				<div className="search">
					<input placeholder="단어를 검색해보세요" onChange={(e)=>handleSearch(e)} onKeyUp={(e)=>searchWords(e)} />
					<div className="SearchResult" style ={{display: searchData ? "block" : "none" }}>
						{searchData && searchData.map((data,index) =>
							<div className="result" key={index} data={data} index={index} >
								<Link exact to="/worddetail/:id"><p>{data && data.word_name}</p></Link>
								<span>{data && " - " + descriptionCut(data)}</span>
							</div>)}
					</div>
				</div>
			</div>
		</section>
			<section className="Detail">
				<div className="DetailCard">
					<div className="card">
						<h1>{detail && detail.word_name}</h1>
						<p>{detail && detail.word_description}</p>
						<span>{detail && detail.word_example}</span>
						<h4>{category.toString()}</h4>
						<button onClick={onLike}><img src={likeImg}/><span className="like_num"> {like}</span></button>
						<button onClick={onDisLike}><img src={dislikeImg}/> <span className="dislike_num"> {dislike}</span></button>
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
export default WordDetail;