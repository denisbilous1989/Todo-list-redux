import React from "react";
import { connect } from 'react-redux';

import { removeTodo, checkTodo } from '../../../../store/todos/actions';
import { selectAdd } from '../../../../store/todos/selector';


import './styles.scss';

const Item = ({ id, value, checked, removeTodo, checkTodo }) => {
  const handleRemoveTodo = todoId => {
    removeTodo(todoId)
}

const handleCheckTodo = (todoId) => {
checkTodo(todoId)
}
  return (
  <li className="item">
    <div className={checked ? 'value done' : 'value'}>
      <input
        className="check"
        type="checkbox"
        defaultChecked={checked}
        onClick={() => handleCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => handleRemoveTodo(id)}>
      x
    </button>
  </li>
)}

const mapStateToProps = state => ({
  todos: selectAdd(state),
})

const mapDispatchToProps = {
  removeTodo,
  checkTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
