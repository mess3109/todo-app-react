import React from 'react';
import { Link } from 'react-router';

import { api, getApiPromise } from '../helpers/api';
import Button from './button';
import Navbar from './navbar';
import TodoForm from './todo-form';
import TodoLink from './todo-link';
import Todos from './todos';
import TodosActiveBar from './todos-active-bar';


/**
 * TodosPage component
 * @class
 */
class TodosPage extends React.Component {
  /**
   * Base CSS class
   * @static
   */
  static baseCls = 'todos-page'

  /**
   * Prop types
   * @static
   */
  static propTypes = {
    params: React.PropTypes.object,
  };

  /**
   * Constructor
   * @constructor
   *
   * @param  {object} props - Props
   */
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filterBy: props.params.filter,
      activeTodos: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.setFilterBy = this.setFilterBy.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
    this.completeAllActive = this.completeAllActive.bind(this)
    this.archiveAllComplete = this.archiveAllComplete.bind(this)
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    api('GET', null, this.updateTodos);
  }

  /**
   * Add todo
   *
   * @param  {string} text - Todo text
   */
  addTodo(text) {
    if (!text) {
      return;
    }

    api('POST', { text }, this.postTodo);
  }

  /**
   * Posts new todo to the todos collection
   *
   * @param  {object} json - Resulting JSON from fetch
   */
  postTodo(json) {
    this.setState({
      todos: [...json],
    });
  }

  /**
   * Set filterBy state
   *
   * @param {string} filterBy - filterBy state
   */
  setFilterBy(filterBy) {
    this.setState({ filterBy });
  }

  /**
   * Update todos array state
   *
   * @param  {Array} todos - Array of todo objects
   */
  updateTodos(todos) {
    this.setState({ todos: todos , activeTodos: todos.filter(todo => todo.status === "active").length });
  }

  //This is a patch so that completeAllActive() and archiveAllComplete() persist to database.  There is probably a cleaner way to do this. 

  putTodo = json => {
    const index = this.state.todos.findIndex(todo => {
      return todo.id === json.id;
    });

    this.updateTodos(
      [
      ...this.state.todos.slice(0, index),
      json,
      ...this.state.todos.slice(index + 1),
      ]
      );
  }

  completeAllActive() {
    const currentStateCopy = [...this.state.todos]
    for (var i = 0; i < currentStateCopy.length; i++) {
      if (currentStateCopy[i].status === "active") {
        let newTodo = Object.assign({}, currentStateCopy[i]);
        newTodo.status = "complete"      
        api('PUT', newTodo, this.putTodo);
      }
    }
  }

  archiveAllComplete() {
    const currentStateCopy = [...this.state.todos]
    for (var i = 0; i < currentStateCopy.length; i++) {
      if (currentStateCopy[i].status === "complete") {
        let newTodo = Object.assign({}, currentStateCopy[i]);
        newTodo.archive = true        
        api('PUT', newTodo, this.putTodo);
      }
    }
  }


  /**
   * Render
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className={this.baseCls}>
        <Navbar filterBy={this.state.filterBy} onClickFilter={this.setFilterBy} archiveAllComplete={this.archiveAllComplete} />
        <TodosActiveBar activeTodos={this.state.activeTodos} completeAllActive={this.completeAllActive}/>
        <TodoForm onSubmit={this.addTodo} />
        <Todos
          filterBy={this.state.filterBy}
          todos={this.state.todos}
          updateTodos={this.updateTodos}
        />
      </div>
    );
  }
}

export default TodosPage;
