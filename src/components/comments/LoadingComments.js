import './LoadingComments.css';

const LoadingComments = () => {
	

	return (
		<div className='loading-comments'>
			{[...Array(20)].map((_, i) => (
				<div className='loading-comment'>
					<div className='loading-comment-avatar'></div>
					<div
						className='loading-comment-content'
						style={{
							height: `${Math.floor(Math.random() * 100) + 40}px`,
						}}
					></div>
				</div>
			))}
		</div>
	);
};

export default LoadingComments;
