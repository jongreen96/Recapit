import './Preview.css';
import dummyImage from '../../images/preview-image.webp';

const Preview = () => {
    return (
        <div className="preview tile">
            <div className='preview-content'>
                <img src={dummyImage} alt="preview" />
            </div>
            <div className='preview-footer'>
                <h2><strong>Comments</strong></h2>
                <p>There are no comments yet.</p>
            </div>
        </div>
    )
}

export default Preview;