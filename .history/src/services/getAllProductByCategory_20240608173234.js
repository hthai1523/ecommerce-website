
import {api} from '../constant';

const getAllProductByCategory = async (title) => {
  try {
    const response = await api.get(`/products/category/${title}`)
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

export default getAllProductByCategory;