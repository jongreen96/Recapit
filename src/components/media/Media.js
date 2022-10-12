const Media = ({ post }) => {
	if (post?.post_hint === 'image') {
		return (
			<div className='media'>
				<img
					src={post.url}
					className='post-preview-image'
					alt={post.id}
				/>
			</div>
		);
	}

	if (post?.post_hint === 'rich:video') {
		return (
			<div className='media'>
				<video loop autoPlay>
					<source src={post.url} type='video/mp4'></source>
				</video>
			</div>
		);
	}

	if (post?.post_hint === 'rich:iframe') {
		return (
			<div className='media'>
				<iframe
					src={post.url}
					title={post.title}
					allowFullScreen
					allow='autoplay'
				/>
			</div>
		);
	}

	if (post?.post_hint === 'hosted:video') {
		return (
			<div className='media'>
				<iframe
					src={post.media.reddit_video.fallback_url}
					title={post.title}
					allowFullScreen
					allow='autoplay'
				/>
			</div>
		);
	}

	if (post?.gallery_data) {
		return (
			<div className='media'>
				<a href={post.url} target='_blank' rel='noreferrer'>
					<img src={post.thumbnail} alt='gif'></img>
				</a>
			</div>
		);
	}

	return <div></div>;
};

export default Media;
