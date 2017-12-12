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
const Navbar = ({ filterBy, onClickFilter, archiveAllComplete }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'navbar'

  let indexLinkCls = `${baseCls}__item`;
  indexLinkCls += filterBy === '' ? ` ${baseCls}__item--active` : '';

  let activeLinkCls = `${baseCls}__item`;
  activeLinkCls += filterBy === 'active' ? ` ${baseCls}__item--active` : '';

  let completedLinkCls = `${baseCls}__item`;
  completedLinkCls += filterBy === 'completed' ? ` ${baseCls}__item--active` : '';

  let archivedLinkCls = `${baseCls}__item`;
  archivedLinkCls += filterBy === 'archived' ? ` ${baseCls}__item--active` : '';

  return (
    <div className={baseCls}>
      <Link
        to="/"
        className={`${indexLinkCls}`}
        onClick={() => onClickFilter('')}
      >
        All
      </Link>
      <Link
        to="/active"
      className={`${activeLinkCls}`}
        onClick={() => onClickFilter('active')}
      >
        Active
      </Link>
      <Link
        to="/completed"
        className={`${completedLinkCls}`}
        onClick={() => onClickFilter('completed')}
      >
        Completed
      </Link>
      <Link
        to="/archived"
        className={`${archivedLinkCls}`}
        onClick={() => onClickFilter('archived')}
      >
        Archived
      </Link>
      <span className="archive" onClick={() => archiveAllComplete()}>Archive all completed</span>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
