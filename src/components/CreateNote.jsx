import React,{useState} from "react";

function CreateNote(props){



const [note,setNote] = useState({
    title:"",
    content:""
});

function handleChange(event)
{
    const {name,value} = event.target;

    setNote(prevValue =>{
        return {
            ...prevValue,
            [name]:value
        }
    });

    event.preventDefault();
}

function submitNote(event){

    props.onAdd(note);

    setNote({
        title:"",
        content:""
    } );
      event.preventDefault();

      
}

    return <div className = 'addnote'>

    <form>
    <input type = 'text' id='noteTitle' name='title' value={note.title} placeholder='Note Title' onChange={handleChange}></input>
    <textarea id='noteArea' name='content' value={note.content} placeholder='Share your thoughts here...' onChange={handleChange}></textarea>

    <div className='btn'>
    <button onClick = {submitNote} id = 'rButton'>+</button>
    </div>
    </form>
  </div>
  
}


export default CreateNote;