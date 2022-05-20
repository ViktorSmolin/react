import React, {useEffect, useState} from 'react'
import './App.css';




function App() {
  const [type,setType] = useState('users')
  const [data,setData] = useState([])
  const [pos,setPos] = useState({
    x: 0, y:0
  })

  const mousMoveHandler = event =>{  setPos({
    x: event.clientX,
    y: event.clientY,
  })
}


  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))
  return () => {
    console.log('clean type')
  }
  }, [type])

  useEffect(()=>{
    console.log('ComponentDidMount')
    window.addEventListener('mousemove',mousMoveHandler)
     return () => {
       window.removeEventListener('mousemove', mousMoveHandler)
     }
  },[])
  return (
    <div className="App">
    
     <button onClick={() => setType('users')} className ='btn btn-success'>Пользователи</button>
      <button onClick={() => setType('todos')} className ='btn btn-danger'>Todos</button>
      <button onClick={() => setType('posts')} className ='btn btn-success'>Посты</button>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
 
export default App;