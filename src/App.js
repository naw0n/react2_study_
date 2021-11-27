import React, { useState } from 'react';
import './App.css';
import TodoLine from './components/TodoLine';

function App() {

  return (
    <div className="App">
      <div className="contentBox">
        <div className="title">
          TO DO LIST
        </div>
          <TodoLine/>
          <TodoLine/>
          <TodoCreate/>
        </div>
    </div>
  );
}

export default App;
