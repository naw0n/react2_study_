import React from "react";
import styled from "styled-components";

function TodoCreate() {
    return(
        <form>
            <TextInput type="text" name="text" />
            <AddButton type="submit">할일추가</AddButton>
        </form>
    );
}

export default TodoCreate;