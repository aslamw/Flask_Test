import UserCard  from './components/UseCards/index'
import './App.css';
// padrão: camelCase
// padrão usado: PascalCase

function App() {
  return (
    <div className="App">
      <UserCard
        name='Daniel'
      >
        Frontend  
      </UserCard>
      <UserCard
        name='Emma'
      >
        Backend
      </UserCard>
      
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
  );
}

export default App;
