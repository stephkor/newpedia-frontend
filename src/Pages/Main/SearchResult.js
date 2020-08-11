import React from 'react';
import {useState} from 'react';





const SearchResult = (data, index) => {
	 const [searchWords, setSearchWords] = useState(data.search_list)
	const [searchDescription, setDescription] = useState(data.word_description)
	
	console.log(searchWords)
	return (
		<div className="SearchResult" key={index}>
			<section>
				<div className="result">
					<p>{searchWords}</p>
					<span></span>
				</div>
			</section>
		</div>
	)
}

export default SearchResult;