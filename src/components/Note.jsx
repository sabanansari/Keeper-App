import React from "react";
import ReactDOM from "react-dom";

function Note(props)
{
    function handleClick()
    {
        props.onDelete(props.id);

        

    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>
        {props.content}
        </p>
        <div className="btn">
        <button className='deleteButton' onClick={handleClick}>DELETE</button>
        </div>
        
    </div>
}

export default Note;