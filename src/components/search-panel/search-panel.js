import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  onLabelSearch = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.searchItem(term);
  };

  onSubmitSearch = e => {
    e.preventDefault();
    this.props.searchItem(this.state.term);
    this.setState({
      term: '',
    });
  };

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <form className="search-panel input-group" onSubmit={this.onSubmitSearch}>
        <input
          type="text"
          className="form-control"
          value={this.state.term}
          placeholder="type to search"
          onChange={this.onLabelSearch}
        />
        <div className="input-group-append">{buttons}</div>
      </form>
    );
  }
}
