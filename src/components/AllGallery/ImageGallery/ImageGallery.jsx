import { UlGallery, LiGallery, ImgGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
	return (
		<UlGallery className="gallery">
			{images.map(image => (
				<LiGallery key={image.id} className="gallery-item">
					<ImgGallery
						onClick={() => onClick(image.largeImageURL)}
						src={image.webformatURL}
						alt={image.tags}
					/>
				</LiGallery>
			))}
		</UlGallery>
	);
};

ImageGallery.propTypes = {
	onClick: PropTypes.func.isRequired,
	images: PropTypes.array.isRequired,
};
export default ImageGallery;