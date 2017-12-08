import React from 'react';
import { Link } from 'react-router';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filterBy: React.PropTypes.string,
  onClickFilter: React.PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filterBy: '',
  onClickFilter: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = ({ filterBy, onClickFilter }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'navbar'

  let activeLinkCls = `${baseCls}__item`;
  activeLinkCls += filterBy === 'active' ? ` ${baseCls}__item--active` : '';

  let completedLinkCls = `${baseCls}__item`;
  completedLinkCls += filterBy === 'completed' ? ` ${baseCls}__item--active` : '';

  return (
    <div className={baseCls}>
      <Link
        to="/"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('')}
      >
        All
      </Link>
      <Link
        to="/active"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('active')}
      >
        Active
      </Link>
      <Link
        to="/completed"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('completed')}
      >
        Completed
      </Link>
      <Link
        to="/archived"
        activeClassName={`${baseCls}__item--active`}
        className={`${baseCls}__item`}
        onClick={() => onClickFilter('archived')}
      >
        Archived
      </Link>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
