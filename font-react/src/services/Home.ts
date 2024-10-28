import urlBackEnd from "@/utils/axios";

export const ValueLoading = async () => {
  const result = await urlBackEnd.get("/get-value-load-page");
  return result;
};
export const SideBarLoading = async () => {
  const result = await urlBackEnd.get("/value-sidebar-load-page");
  return result;
};
