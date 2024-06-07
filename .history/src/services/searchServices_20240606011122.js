import { api } from "../constant";

export const search = async (value) => {
  try {
    const res = await api.get(``)
    return res;
  } catch (error) {
    console.log(error);
  }
};
