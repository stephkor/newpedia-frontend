import React from 'react';





const SearchResult = (data, index) => {
	return (
		<div className="SearchResult" key={index}>
			<section>
				<div>
					<p>{data.word_name}</p>
					<span>{data.word_description}</span>
				</div>
			</section>
		</div>
	)
}

export default SearchResult;