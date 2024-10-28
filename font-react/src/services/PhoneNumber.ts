import urlBackEnd from "@/utils/axios";

export const ValueLoading = async () => {
  const result = await urlBackEnd.get("/get-value-load-page");
  return result;
};
export const DeatilPhoneNumber = async (number: string) => {
  const result = await urlBackEnd.get(`/detail/${number}`);
  return result;
};
