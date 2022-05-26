import './style.css';
import { useState } from 'react';

function SingleInput() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function clearForm() {
    setError('');
    setSuccess('');

    setName('');
    setAge('');
    setPassword('');
    setAddress('');

  }

  function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setSuccess('');

    if (!name) {
      setError('O nome é obrigatório...');
      return;
    }

    if (age < 18) {
      setError('Você precisa ser maior de idade...');
      return;
    }

    if (!address) {
      setError('Você precisa informar um endereço');
      return;
    }

    if (password.length < 8) {
      setError('A senha precisa ter no mínimo 8 caracters');
      return;
    }

    setSuccess('Cadastro efetuado com sucesso...');
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder='Digite seu nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder='Digite sua idade'
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />

        <input
          type="text"
          placeholder='Digite seu endereço'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="password"
          placeholder='Digite sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className='error'>{error}</span>}

        {success && <span className='success'>{success}</span>}

        <button type='submit'>Salvar</button>
        <button
          type='button'
          onClick={() => clearForm()}
        >
          Limpar
        </button>
      </form>
    </div>
  );
}

export default SingleInput;
