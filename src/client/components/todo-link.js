import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  text: '',
};

/**
 * Link component
 * @returns {ReactElement}
 */
const TodoLink = ({ text, onClick, checkboxCls }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo-link';

  return (
    <div className={baseCls} onClick={onClick}>
       <span>{text}</span>
    </div>
  );
};

TodoLink.propTypes = propTypes;
TodoLink.defaultProps = defaultProps;

export default TodoLink;
