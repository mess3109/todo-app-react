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

const TodosActiveBar = ({ activeTodos }) => {

  return (
  	<div>
  	{ activeTodos } task{ activeTodos === 1 ? "" : "s" } remaining
  	</div>
  );
}

TodosActiveBar.propTypes = propTypes;
TodosActiveBar.defaultProps = defaultProps;

export default TodosActiveBar;
