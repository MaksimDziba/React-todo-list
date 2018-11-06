import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <span className="todo-list-item-btn">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
        </span>
      </span>
    );
  }
}
