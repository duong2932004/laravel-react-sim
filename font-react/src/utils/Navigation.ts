import { useNavigate } from "react-router-dom";
import config from "@/config";

export const useNavigation = () => {
  const navigate = useNavigate();

  // điều hướng đơn
  const NavigateMobileNetwork = (name: string) => {
    navigate(config.routes.routes.mobile_network(name));
  };
  const NavigateStartNumber = (name: string) => {
    navigate(config.routes.routes.strat_number(name));
  };
  const NavigateCategory = (name: string) => {
    navigate(config.routes.routes.category(name));
  };

  // điều hướng chung
  const navigateTo = (
    type: "mobileNetwork" | "startNumber" | "category",
    name: string
  ) => {
    if (type === "mobileNetwork") {
      NavigateMobileNetwork(name);
    } else if (type === "startNumber") {
      NavigateStartNumber(name);
    } else if (type === "category") {
      NavigateCategory(name);
    }
  };

  return {
    NavigateMobileNetwork,
    NavigateStartNumber,
    NavigateCategory,
    navigateTo,
  };
};
