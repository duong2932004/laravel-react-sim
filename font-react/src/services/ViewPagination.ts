import urlBackEnd from "@/utils/axios";
import axios from "axios";

export const PaginationMobileNetwork = async (name: string) => {
  const result = await urlBackEnd.get(`/pagination/mobileNetworks/${name}`);
  return result.data;
};

export const PaginationPage = async (url: string) => {
  const result = await axios.get(url);
  return result.data;
};
