import urlBackEnd from "@/utils/axios";

export const searchGet = async (path: string) => {
  const result = await urlBackEnd.get(`/products/search/${path}`);
  return result.data;
};
