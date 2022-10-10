import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import logo from '../../images/recapit-logo.svg';
import './Preview.css';

const Preview = () => {
	const { posts, selectedPost } = useSelector((state) => state.posts);
	const data = posts.find((post) => post.id === selectedPost);
	const dispatch = useDispatch();
	console.log(data);

	useEffect(() => {
		
	},[]);

	if (data) {
		return (
			<div className='preview tile'>
				{
					data.post_hint === 'image' ? ( // If the post has a preview image, then it renders it.
						<div className='preview-content'>
							<img src={data.url} alt='preview' />
						</div>
					) : data.post_hint === 'hosted:video' ||
					  data.url.includes('youtube.com') ? ( // If the post is a video or youtube url, then it renders the iframe.
						<div className='preview-content'>
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
						</div>
					) : data.post_hint === 'link' ? ( // If the post is a link, then the thumbnail is rendered as a link.
						<div className='preview-content'>
							<a href={data.url} rel='noreferrer' target='_blank'>
								<img src={data.thumbnail} alt='preview' />
							</a>
						</div>
					) : data.post_hint === 'rich:video' ? ( // If the post is a rich:video, then the thumbnail is rendered as a link.
						<div className='preview-content'>
							<a href={data.url} rel='noreferrer' target='_blank'>
								<img src={data.thumbnail} alt='preview' />
							</a>
						</div>
					) : data.selftext !== '' ? ( // if the post has selftext, then render it inside a <h2> tag.
						<div className='preview-text'>
							<h2>{data.title}</h2>
							<h3 className='text'> {data.selftext} </h3>
						</div>
					) : (
						<div className='preview-text'>
							<h2>{data.title}</h2>
							<div className='empty'></div>
						</div>
					) // If the none of the above match, then a fallback message is displayed.
				}
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
