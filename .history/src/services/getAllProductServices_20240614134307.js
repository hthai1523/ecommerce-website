
import {api} from '../constant';

const getAllProductServices = async ({limit}) => {
  try {
    const response = await api.get('/products', {
      params: {
        limit
      }
    })
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

export default getAllProductServices;