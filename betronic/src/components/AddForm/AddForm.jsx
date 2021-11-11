import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ADD_NOTE } from '../../redux/actionTypes/actionTypes'


function AddForm() {

  const dispatch = useDispatch();

  const [route, setRoute] = useState('');
  const [title, setTitle] = useState('');



  const handleClick = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_NOTE', payload: {route, nodes: [], title}})
  }


  return (
    <form style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
      <input type="text" onChange={(e) => setRoute(e.target.value)}/>
      <input type="text" onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={handleClick}>Создать</button>
      <input type="text" value={route+title} />
    </form>
  )
}

export default AddForm
