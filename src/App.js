import { useState } from 'react';
import './App.css';
import Todo from "./components/todo"
import Items from "./components/items"

function App() {

  const[state,setState]=useState([])

const pushDate=(a)=>{
    setState((prevstate)=>{
      return[...prevstate,a]
    })
}
  return (
    <div className="App">
    <Todo save ={pushDate}/>
  {state.map((el)=>{
    return(
      <Items key={el.id} items={el.email}/>
    )
  })}
    </div>
  );
}

export default App;
