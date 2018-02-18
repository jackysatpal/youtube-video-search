import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div>Loading..</div>
		);
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className = "video-detail col-md-8">
			<div className = "embed-responsive embed-responsive-16by9">
				<iframe src = { url } className = "embed-responsive-item">

				</iframe>
			</div>

			<div className = "details">
				<div><span className = "title">Title:</span> { video.snippet.title }</div><br/>
				<div><span className = "title">Description:</span> { video.snippet.description }</div>
			</div>

			<div className = "user">
				<p>Made by <a href = "https://jackysatpal.github.io" target = "_blank">Jacky</a></p>
			</div>
		</div>
	)
};

export default VideoDetail;