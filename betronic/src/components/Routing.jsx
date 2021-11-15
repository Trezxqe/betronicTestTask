import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Ma from './Ma';


function Routing() {
  const nodes = useSelector((state) => state.nodes);
  return (
    <>
      <Router>
        <Routes>
          {nodes?.map((item, index) => {
            return (
              <Route Path={`/${item.route}`} key={index} element={<Ma />} exact></Route>
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
