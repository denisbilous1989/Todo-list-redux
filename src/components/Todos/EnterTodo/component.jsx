import React from "react";
import { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../store/todos/actions';
import { selectAdd } from '../../../store/todos/selector';

import './styles.scss';


const EnterTodo = ({ addTodo }) => {

  const [enterTodo, setEnterTodo] = useState('');

  const handleEnterTodo = e => setEnterTodo(e.target.value)

  const handleAddTodo = () => {

    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    if(enterTodo !== '') {
      addTodo(newTodo);
      setEnterTodo('');
  }
}

return (
  <div className="enter-wrap">
    <input
      type="text"
      placeholder="Write your todo here"
      value={enterTodo}
      onChange={handleEnterTodo}
      className="enter"
    />
    <button
      className="add"
      onClick={handleAddTodo}
    >
      Add Todo
    </button>
  </div>
)}

const mapStateToProps = state => ({
  todos: selectAdd(state),
})

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo);
