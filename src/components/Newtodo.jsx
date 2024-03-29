
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask } from './Slice';

const Newtodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    dispatch(addTask({ id: Math.random().toString(), title, description, date, completed: false }));
  };

  return (
    <div>
      <h1 className='titulonew'>TO DO new</h1>
      <div>
        <input className='titulotarea' type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <input className='descripcion' type="text" placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <input className='fecha' type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <button className='guardar' onClick={handleSubmit}>Guardar</button>
      <div>
        <Link className='vertarea' to="/tododetail">Ver Tareas</Link>
      </div>
    </div>
  );
};

export default Newtodo;
