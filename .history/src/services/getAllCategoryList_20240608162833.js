
import {api} from '../constant';

const getAllCategoryList = async () => {
  try {
    const response = await api.get('/category-list')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getAllCategoryList;