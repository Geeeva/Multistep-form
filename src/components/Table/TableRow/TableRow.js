import React from 'react';

const tableRow = (props) => (
	<React.Fragment>
		<div className="TableData">
			<div>{props.row.id}.</div>
			<a href={props.row.url}>
				<div className="PicWrapper">
					<img src={props.row.thumbnailUrl} alt={props.id}/>
					<div className="overlay"><span>{props.row.title}</span></div>
				</div>
			</a>
			<div>{props.row.releaseDate}</div>
			<div>{props.row.genre}</div>
			<div>{props.row.productionCompany}</div>
			<div>{props.row.rating}</div>
			<button onClick={props.clicked}>X</button>
		</div>
		
		
	</React.Fragment>
);

export default tableRow;