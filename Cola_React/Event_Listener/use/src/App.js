import './App.css';
import {useState} from 'react'

export default function App() {

  const [name, setName] = useState('oi')
  const [open, setOpen] = useState(true)
  const [car, useCar] = useState([{
    id:1,
    name: 'corolla',
    color: 'black'
  }])
  const [movies, setMovies] = useState([
    {
    id: 1,
    name: 'move 1',
    active:false
    },
    {
      id: 2,
      name: 'move 2',
      activate: true
    }
  ])

  function actives(){
    const localMovies = [...movies]

    localMovies.forEach((movie) => movie.activate = true)
    setMovies(localMovies)
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{open ? 'true' : 'false'}</h1>
      <h1>{car.name}</h1>
      <ul>
        {movies.map((movie)=> movie.activate && <li key={movie.id}> {movie.name} </li>)}
      </ul>
      <button onClick={()=> actives()}>ativar todos</button>
    </div>
  );
}
