import AddForm from '../AddForm/AddForm';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/reducer/nodeReducer';
import Ma from '../Ma';
// import Routing from '../Routing';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Provider store={store}>
      {/* <BrowserRouter> */}
        <AddForm />
        <Ma />
        {/* <Routing /> */}
      {/* </BrowserRouter> */}
      </Provider>
    </>
  );
}

export default App;
