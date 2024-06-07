
import {api} from '../constant';

const getOneProductServices = async () => {
  try {
    const response = await api.get('/products')
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

export default getOneProductServices;