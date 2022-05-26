import face from '../../assets/IMG_20220212_085842.jpg'

export default function UserCard(){
  return(
    <div className='Usercard'>
      <img src={face} />
      <strong>User Name</strong>
      <span>Aluno</span>
      <button>conect</button>
    </div>
  )
}