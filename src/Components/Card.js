import React from 'react';

const Card = () => {
    return(
        <div className="card">
            <span>{props.name}</span>
            <img alt={props.name} src={props.img}/>
        </div>
    )
}

export default Card;