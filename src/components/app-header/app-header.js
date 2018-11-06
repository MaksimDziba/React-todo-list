import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo = '0', done = '0' }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
