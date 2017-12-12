import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: React.PropTypes.bool,
  onClickDelete: React.PropTypes.func,
  onClickTodo: React.PropTypes.func,
  status: React.PropTypes.string,
  archive: React.PropTypes.bool,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  onClickArchive: noop,
  status: '',
  text: '',
  archive: false
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickArchive, onClickTodo, status, text }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');

  const checkboxCls = 'checkbox'
    + (status === 'complete' ? ' checkbox--status-complete' : '')

  return (
    <li className={todoCls}>
      <span className="checkbox" className={checkboxCls}>{"."}</span>
      <TodoLink text={text} onClick={onClickTodo} checkboxCls={checkboxCls}/>
      {status === 'complete' ? <span className="archive" onClick={onClickArchive} >archive</span> : "" }
      <span className="deleteX" onClick={onClickDelete}>{"X"}</span>
      <hr />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
