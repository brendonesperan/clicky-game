import React from "react";

function Images(props) {
        
    return (
        <img 
        src={props.src} 
        className={props.className} 
        onClick={props.onClick} 
        alt={props.alt} 
        clicked={props.clicked}
        />
    )
}

export default Images;