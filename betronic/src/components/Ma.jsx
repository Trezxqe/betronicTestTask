import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Ma() {
  const nodes = useSelector((state) => state.nodes);
  console.log(nodes);
  return (
    <>
      {nodes?.map((item, index) => {
        return (
            <Link key={index} to={`/${item.route}`}>{item.route}</Link>
            );
      })}
    </>
  );
}

export default Ma;
