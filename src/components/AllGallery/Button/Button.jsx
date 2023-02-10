import { ButtonS } from './Button.ctyled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
	return (
		<ButtonS onClick={onClick} type="button">
			Load more
		</ButtonS>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
};
export default Button;