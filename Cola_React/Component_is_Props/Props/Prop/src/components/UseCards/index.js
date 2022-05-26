import face from '../../assets/IMG_20220212_085842.jpg'

export default function UserCard({name, Children}){
  return(
    <div className='Usercard'>
      <img src={face} />
      <strong>{name}</strong>
      <span>{Children}</span>
      <button>conect</button>
    </div>
  )
}