
import React from 'react';

const pagination = (props) => {

    return (
        <li 
        	className={"Pagination" + (props.active ? ' active' : '')}
        	onClick={props.clicked}>
        	{props.id}
        </li>
    );
}

export default pagination;