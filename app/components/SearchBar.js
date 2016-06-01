import React from 'react';

var searchButton = {
	height: "50px",
	width: "150px",
	marginRight: "20px",
	float: "left"
}

var searchBox = {
	width: "1000px",
	marginTop: "200px",
	marginLeft: "auto",
	marginRight: "auto",
}

var searchContainer = {
	width: "800px",
  boxSizing: "border-box",
  border: "2px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  backgroundColor: "white",
  backgroundImage: "url('/img/searchicon.png')",
  backgroundSize: "27px",
  backgroundPosition: "10px 10px", 
  backgroundRepeat: "no-repeat",
  padding: "12px 20px 12px 40px",
  transition: "width 0.4s ease-in-out",
  float: "left"
}

var SearchBar = (props) => (
	<div className='search-box' style={searchBox}>
		<button 
			className='btn btn-primary dropdown-toggle' 
			type="button" 
			data-toggle="dropdown" 
			style={searchButton}>
			Location
			<span className="carat">
			</span>
		</button>
	  <input 
	  	style={searchContainer} 
	  	type="text" 
	  	name="location-search" 
	  	placeholder="Find your next trip.." />
	</div>
);

export default SearchBar;