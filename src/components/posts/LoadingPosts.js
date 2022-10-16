const LoadingPosts = () => {
	return (
		<div className='posts'>
			{[...Array(20)].map((_, i) => (
				<div className='loading-post'>
                    <div className='loading-post-thumbnail'></div>
                </div>
			))}
		</div>
	);
};

export default LoadingPosts;
