import React, {useEffect, useState, useRef, useMemo} from 'react'
import ItemsList from './itemsList'

function App() {

 const [colored, setColored ] = useState(false)
 const [count, setCount] = useState (1)


 const styles = {
   color: colored ? 'darkred' : 'black'
 }

const generateItemsFromAPI = () => {
  return new Array (count).fill('').map((_, i)  => `Элемент ${i + 1}`)
}

  return (
    <>
      <h1 style = {styles}>Количество элементов: </h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
     <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>


    <ItemsList getItems = {generateItemsFromAPI}/>
    </>
  );
}
 
export default App;
