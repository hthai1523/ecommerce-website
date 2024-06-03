import axios from 'axios';

import {BASE_URL} from '../constant';

const getAllProductServices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}clothes`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getAllProductServices;