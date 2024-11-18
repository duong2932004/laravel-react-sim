import urlBackEnd from "@/utils/axios";

export const SearchValue = async () => {
  const result = await urlBackEnd.get(`/search-value`);
  return result.data;
};
