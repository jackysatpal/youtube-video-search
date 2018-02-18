import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCd9RcuprnUiQ-C-8dLeUJ0Zifr_IqlRTU';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Software Engineer');
	}

	videoSearch(searchTerm) {
		YTSearch({key : API_KEY, term: searchTerm}, (data) => {
			this.setState({ 
				videos: data,
				selectedVideo: data[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce( (searchTerm) => {
			this.videoSearch(searchTerm) 
		}, 500);

		return (
			<div>
				<SearchBar onSearchTermChange = { videoSearch } />
				<VideoDetail video = { this.state.selectedVideo } />
				<VideoList 
					onVideoSelect = { (selectedVideo) => {
						this.setState({ selectedVideo }) }
					}
					videos = { this.state.videos } />
			</div>
		);
	}
}

render(<App />, document.querySelector('.container'));