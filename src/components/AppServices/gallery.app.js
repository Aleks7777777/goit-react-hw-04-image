import axios from "axios";


axios.defaults.baseURL = 'https://pixabay.com/api/';

const gallaryService = axios.create({
	baseURL: 'https://pixabay.com/api/',
	params: {
		key: '32809710-ecba0a567f38cfb22e7b3a093',
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: '12',
	},
});

const getImage = async params => {
	const { data } = await gallaryService.get('', { params });
	return data;
};
export default getImage;


//    const getImage = async (searchValue, page) => {
//   const BASE_URL = 'https://pixabay.com/api';
//   const OPTIONS = `q=${searchValue}&page=${page}&key=32803223-d7ae4ad2160d4578da0803e08&image_type=photo&orientation=horizontal&per_page=12`;
//   const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
//   return response.data;
// };
// export default getImage;