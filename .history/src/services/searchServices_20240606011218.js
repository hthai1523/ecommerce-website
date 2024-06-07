import { api } from "../constant";

export const search = async (input) => {
  try {
    const data = await api.get("/products/search", {
      params: {
        q: input,
      },
    });
    return data.data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
