import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_NODE } from '../../redux/actionTypes/actionTypes';

function AddForm() {
  const [title, setTitle] = React.useState('');
  const [route, setRoute] = React.useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: ADD_NODE,
      payload: {
        state: {title, nodes: [], route},
      },
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setRoute(e.target.value)} />
      <button onClick={handleClick}>asd</button>
    </div>
  );
}

export default AddForm;
