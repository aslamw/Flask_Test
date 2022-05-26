
import images from './assets/ED.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h2>Eduart Elric</h2>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </header>
      <section>
        <div className='left'>
          <img src={images} alt= 'perfil'/>
          <strong>Eduart Elric</strong>
          <br/>
          <span>Eu sou Eduart da cubos Academy
            estudante de desenvolvimento Full Stack
          </span>
        </div>
        <div className='right'>
            <strong>28 de Fevereiro de 2022</strong>
            <br/>
            <h2>Introdução ao React</h2>
            <br/>
            <span>Nesse post nós iremos falar sobre como o React, é importante</span>
            <br/>
            <a href='#'>Ler mais</a>
        </div>
        
      </section>
      <footer>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
