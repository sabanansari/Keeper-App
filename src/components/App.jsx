import React,{useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App()
{
   
  var [notes,extentNote] = useState([]);


  function addNote(note)
  {
    extentNote(prevVal=>{
      return [...prevVal,note];
    })
  }

  function deleteItem(id)
  {
    extentNote(prevValues=>{
      return prevValues.filter((noteItem,index)=>{
        return index !== id;
      });
    });

  }

    return <div className = "*">
      <Header />
      <CreateNote onAdd = {addNote}/>
      {notes.map((noteItem,index)=>(
        <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
       />
       ))}
      <Footer />
    </div>
}

export default App;