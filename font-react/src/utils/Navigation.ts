import { useNavigate } from "react-router-dom";
import config from "@/config";

export const useNavigation = () => {
  const navigate = useNavigate();

  // điều hướng đơn
  const NavigateMobileNetwork = (value_query: string) => {
    navigate(config.routes.routes.mobile_network(value_query));
  };
  const NavigateStartNumber = (value_query: string) => {
    navigate(config.routes.routes.start_number(value_query));
  };
  const NavigateCategory = (value_query: string) => {
    navigate(config.routes.routes.category(value_query));
  };
  const NavigatePrice = (value_query: string) => {
    navigate(config.routes.routes.price(value_query));
  };
  const NavigateKeyWord = (value_query: string) => {
    navigate(config.routes.routes.key_word(value_query));
  };

  // điều hướng chung
  const navigateTo = (
    type: "mobileNetwork" | "startNumber" | "category",
    value_query: string
  ) => {
    if (type === "mobileNetwork") {
      NavigateMobileNetwork(value_query);
    } else if (type === "startNumber") {
      NavigateStartNumber(value_query);
    } else if (type === "category") {
      NavigateCategory(value_query);
    } else if (type === "price") {
      NavigatePrice(value_query);
    } else if (type === "key_word") {
      NavigateKeyWord(value_query);
    }
  };

  return {
    NavigateMobileNetwork,
    NavigateStartNumber,
    NavigateCategory,
    NavigatePrice,
    NavigateKeyWord,
    navigateTo,
  };
};
