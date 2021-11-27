import React from 'react';
import styled from "styled-components";
import TodoContent from './components/TodoContent';

function TodoLine() {
    return (
        <div className="TodoLine">
            <input type="checkbox" id = "checkbox"/>
            <TodoContent/>
        </div>
    );
}

export default TodoLine;