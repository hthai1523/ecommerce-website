import * as request from "../utils/request";

export const search = async () => {
  try {
    const res = await request.getProducts("clothes");
    return res;
  } catch (error) {
    console.log(error);
  }
};
