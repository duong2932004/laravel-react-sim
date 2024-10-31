// services/ViewPagination
import urlBackEnd from "@/utils/axios";
import axios from "axios";

export const PaginationMobileNetwork = async (
  value_query: string,
  page?: string
) => {
  const result = await urlBackEnd.get(
    `/pagination/mobileNetworks/${value_query}`,
    {
      params: { page },
    }
  );
  return result.data;
};

export const PaginationStartNumber = async (
  value_query: string,
  page?: string
) => {
  const result = await urlBackEnd.get(
    `/pagination/startNumbers/${value_query}`,
    {
      params: { page },
    }
  );
  return result.data;
};

export const PaginationCategory = async (
  value_query: string,
  page?: string
) => {
  const result = await urlBackEnd.get(`/pagination/category/${value_query}`, {
    params: { page },
  });
  return result.data;
};

export const PaginationPrice = async (value_query: string, page?: string) => {
  const result = await urlBackEnd.get(`/pagination/price/${value_query}`, {
    params: { page },
  });
  return result.data;
};

export const PaginationKeyWord = async (value_query: string, page?: string) => {
  const result = await urlBackEnd.get(`/pagination/keyWord/${value_query}`, {
    params: { page },
  });
  return result.data;
};

export const PaginationPage = async (url: string) => {
  const result = await axios.get(url);
  return result.data;
};
