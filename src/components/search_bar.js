import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm : '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({ searchTerm: event.target.value });
		this.props.onSearchTermChange(event.target.value);
	}

	render() {
		return (
			<div className = "search-bar">
				<span id = "title">YouTube Video Search</span>
				<input value = { this.state.searchTerm } onChange = { this.onInputChange } />
				<hr className = "hr" />
			</div>
		);
	}
}

export default SearchBar;