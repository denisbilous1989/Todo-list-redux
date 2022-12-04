import React from "react";

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

const TodosComponent = ({ todos, isTodosEmpty }) => {

  return (
<div className="todos">
  <h1 className="title">Todos</h1>
  <EnterTodo />
  
  {!isTodosEmpty
    ? <EmptyList/>
    : (
      <List
        todos={todos}
      />
    )
  }
</div>
)}

export default TodosComponent;
