import React from 'react';

/**
 * Prop Types
 * @private
 */
const propTypes = {
  activeTodos: React.PropTypes.number
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  activeTodos: 0
};

const TodosActiveBar = ({ activeTodos, completeAllActive }) => {

  return (
  	<div className="activeTodosBar">
  	{ activeTodos } task{ activeTodos === 1 ? "" : "s" } remaining 
  	<span className="completeAll" onClick={() => completeAllActive()}>Complete All</span>
  	</div>
  );
}

TodosActiveBar.propTypes = propTypes;
TodosActiveBar.defaultProps = defaultProps;

export default TodosActiveBar;
