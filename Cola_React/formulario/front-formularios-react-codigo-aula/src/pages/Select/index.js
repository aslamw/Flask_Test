import './style.css';
import { useState } from 'react';

function Select() {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [select, setSelect] = useState({ id: '', name: '' });
  const [options, setOptions] = useState([
    {
      id: 1,
      name: 'Maçã',
      value: 100
    },
    {
      id: 2,
      name: 'Banana',
      value: 200
    },
    {
      id: 3,
      name: 'Abacate',
      value: 500
    },
    {
      id: 4,
      name: 'Laranja',
      value: 800
    }
  ])


  function clearForm() {
    setError('');
    setSuccess('');
  }

  function handleChangeSelect(event) {
    const localOptions = [...options];

    const myOption = localOptions.find((item) => item.id === parseInt(event.target.value));

    setSelect({ id: myOption.id, name: myOption.name });
  }

  function handleSubmit(event) {
    event.preventDefault();



  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}>

        {select.name}

        <select
          value={select.id}
          onChange={(event) => handleChangeSelect(event)}
        >
          {options.map((item) => (
            <option
              key={item.id}
              value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

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

export default Select;
