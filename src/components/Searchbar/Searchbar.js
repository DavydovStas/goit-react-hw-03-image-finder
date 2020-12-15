import React from 'react';

class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.trim() === '') {
      alert('Please include theme of search');
      return;
    }

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleChange = e => {
    this.setState({
      searchValue: e.currentTarget.value.toLowerCase(),
    });
  };

  resetForm = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
