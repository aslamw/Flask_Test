import './style.css';
import CloseEye from '../../assets/close-eye.svg';
import OpenEye from '../../assets/open-eye.svg';
import { useState } from 'react';

function Main() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      console.log('Informe os dados corretamente...');
      return;
    }

    console.log('Bem vindo', email);
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder='E-mail'
            value={email} onChange={(event) => setEmail(event.target.value)}
          />
          <div className='container-input-password'>
            <input
              type={show ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <img
              className='eye-icon'
              src={show ? OpenEye : CloseEye}
              alt="Show password"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
        <button type='submit' className='btn-login'>Login</button>
      </form>
    </div>
  );
}

export default Main;
