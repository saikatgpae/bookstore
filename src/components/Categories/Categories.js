import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../rdux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.categories);
  return (
    <>
      <button type="submit" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
      <h3>{text}</h3>
    </>
  );
}

export default Categories;
