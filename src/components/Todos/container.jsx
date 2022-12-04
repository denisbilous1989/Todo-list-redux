import React from 'react';
import { connect } from 'react-redux';

import TodosComponent from "./component";

import { selectAdd } from '../../store/todos/selector';

import './styles.scss';


const Todos = ({ todos }) => {

  const isTodosEmpty = () => {

    if(todos.length === 0) {
      return false;
    }
    return true;
  }

    return (
      <TodosComponent
        todos={todos}
        isTodosEmpty={isTodosEmpty()}
      />
    )
}

const mapStateToProps = state => ({
  todos: selectAdd(state),
})

export default connect(mapStateToProps, null)(Todos);

