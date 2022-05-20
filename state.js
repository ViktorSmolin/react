import React, {useState} from 'react'
import './App.css';

function computerIntialCounter() {
  console.log('Some calculation...')
  return Math.trunc(Math.random() * 20)
}


function App() {
  const [counter, setCounter] = useState(() => {
    return computerIntialCounter()
  })

  const[state, setState] = useState( {
    title: 'Счётчик',
    date: Date.now()
  })


function increment(){
  setCounter((prevCounter)=>{
    return prevCounter + 1
  })
}


  function decriment(){
    setCounter(counter - 1);
  }

  function updateTitle(){
  setState(prev=>{
    return{
      ...prev,
      title: 'Новое название'
      }
   });
  }

  return (
    <div className="App">
      <h1>Счётчик: {counter}</h1>

      <button onClick={increment} className ='btn btn-success'>Добавить</button>
      <button onClick={decriment} className ='btn btn-danger'>Убрать</button>
      <button onClick={updateTitle} className ='btn btn-danger'>Изминить название</button>

      <pre>{JSON.stringify(state,null,2)}</pre>
    </div>
  );
}
 
export default App;
