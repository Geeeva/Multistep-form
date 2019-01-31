import React from 'react';

const tableRow = (props) => (
	<React.Fragment>
		<div className="tableData">
			<div>{props.row.id}</div>
			<div><img src={props.row.thumbnailUrl} alt=""/></div>
			<div>{props.row.title}</div>
			<div>{props.row.releaseDate}</div>
			<div>{props.row.genre}</div>
			<div>{props.row.productionCompany}</div>
			<div>{props.row.rating}</div>
			<button onClick={props.clicked}>X</button>
		</div>
		
		
	</React.Fragment>
);

export default tableRow;