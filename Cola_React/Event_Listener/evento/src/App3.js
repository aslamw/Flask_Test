import './App.css';
import {useRef} from 'react'

function App3() {

  function addtask (){
    const inputRef = useRef(null)
    const ulRef = useRef(null)

    if(!inputRef.current.value){
      return
    }

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(inputRef.current.value))
      
    ulRef.current.appendChild(li)
    inputRef.current.value = ''
  }

  return (
    <div className="App3">
      <input type='text' placeholder='Adicionar nova tarefa' ref={inputRef}/>
      <button onClick={()=>addtask()}>Click</button>
      <ul  ref={ulRef}>

      </ul>
    </div>
  );
}

export default App3;
