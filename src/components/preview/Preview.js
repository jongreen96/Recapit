import { useSelector } from 'react-redux';
import logo from '../../images/recapit-logo.svg';
import './Preview.css';

const Preview = () => {
	const { posts, selectedPost } = useSelector((state) => state.posts);
	const data = posts.find((post) => post.id === selectedPost);

	if (data) {
		return (
			<div className='preview tile'>
				<div className='preview-content'>
					{data.post_hint === 'image' ? (
						<img src={data.url} alt='preview' />
					) : data.post_hint === 'hosted:video' ||
					  data.url.includes('youtube.com') ? (
						<iframe
							title={data.id}
							src={
								data.url.includes('youtube.com')
									? data.url
									: data.media.reddit_video.fallback_url
							}
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					) : data.post_hint === 'link' ? (
						<a href={data.url} rel='noreferrer' target='_blank'>
							<img src={data.thumbnail} alt='preview' />
						</a>
					) : data.post_hint === 'rich:video' ? (
						<a href={data.url} rel='noreferrer' target='_blank'>
							<img src={data.thumbnail} alt='preview' />
						</a>
					) : data.post_hint === 'self' ? (
						'self-post'
					) : null}
				</div>
				<div className='preview-footer'>
					<h2>
						<strong>Comments</strong>
					</h2>
					<p>There are no comments yet.</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className='preview tile'>
				<div className='preview-content'>
					<img src={logo} alt='preview' />
				</div>
				<div className='preview-footer'>
					<h2>
						<strong>Comments</strong>
					</h2>
					<p>There are no comments yet.</p>
				</div>
			</div>
		);
	}
};

export default Preview;
