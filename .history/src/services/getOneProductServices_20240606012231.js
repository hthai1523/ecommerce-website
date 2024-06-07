
import {api} from '../constant';

const getOneProductServices = async (value) => {
  try {
    const response = await api.get(`/products/${value}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getOneProductServices;