import { RotatingLines } from 'react-loader-spinner';
import { LoadStyle } from './Loader.styled';

const Loader = () => {
	return (


		<LoadStyle>
			<RotatingLines
				strokeColor="green"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
		</LoadStyle>
	);
};

export default Loader;