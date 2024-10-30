import { useState, useEffect } from "react";
import {
  PaginationMobileNetwork,
  PaginationPage,
  PaginationStartNumber,
  PaginationCategory,
} from "@/services/ViewPagination";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ViewMore.module.css";
import { MobileNetwork, NavigationUrl } from "@/interface/ViewPagination";
import Filter from "@/components/Filter";
import { FormatSimNumber } from "@/utils/FormatSimNumber";
import image404 from "@/assets/img/404.jpg";
import config from "@/config";
import { usePreviousPath } from "@/contexts/PreviousPathContext";

const cx = classNames.bind(styles);

export default function ViewPagination() {
  const { previousPath } = usePreviousPath();

  const { mobile_network_name, start_number_name, category_label } =
    useParams<NavigationUrl>();
  const [dataPagination, setDataPagination] = useState<MobileNetwork>();
  const [title, setTitle] = useState<string | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        if (mobile_network_name) {
          const response = await PaginationMobileNetwork(mobile_network_name);
          setDataPagination(response.data);
          setTitle(mobile_network_name);
        } else if (start_number_name) {
          const response = await PaginationStartNumber(start_number_name);
          setDataPagination(response.data);
          setTitle(start_number_name);
        } else if (category_label) {
          const response = await PaginationCategory(category_label);
          setDataPagination(response.data);
          setTitle(response.data.category_name);
        } else {
          console.error("No valid parameter provided");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAPI();
  }, [mobile_network_name, start_number_name, category_label]);

  const handleBtnPagination = async (url: string) => {
    try {
      const result = await PaginationPage(url);
      setDataPagination(result.data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleProductClick = (number: string) => {
    navigate(config.routes.routes.detail(number));
  };

  const renderPaginationButtons = () => {
    if (!dataPagination) return null;

    const { current_page, last_page, links } = dataPagination.products;
    const pageNumbers = [];

    if (last_page <= 5) {
      for (let i = 1; i <= last_page; i++) {
        pageNumbers.push(i);
      }
    } else if (current_page <= 3) {
      pageNumbers.push(1, 2, 3, "...", last_page);
    } else if (current_page >= last_page - 2) {
      pageNumbers.push(1, "...", last_page - 2, last_page - 1, last_page);
    } else {
      pageNumbers.push(
        1,
        "...",
        current_page - 1,
        current_page,
        current_page + 1,
        "...",
        last_page
      );
    }

    return (
      <div className="btn-pagination flex gap-2">
        {current_page > 1 && (
          <button
            onClick={() => links[0].url && handleBtnPagination(links[0].url)}
            className="number mr-1 font-medium w-9 h-9 border-2 rounded-full hover:bg-gray-600 hover:text-white"
          >
            {"<"}
          </button>
        )}
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span key={index} className="mx-1">
                ...
              </span>
            );
          }
          const pageLink = links.find((link) => link.label === page.toString());
          return (
            <button
              key={index}
              onClick={() =>
                pageLink && pageLink.url && handleBtnPagination(pageLink.url)
              }
              className={`number mr-1 font-medium w-9 h-9 border-2 rounded-full ${
                page === current_page
                  ? "bg-gray-600 text-white"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}
        {current_page < last_page && (
          <button
            onClick={() =>
              links[links.length - 1].url &&
              handleBtnPagination(links[links.length - 1].url)
            }
            className="number mr-1 font-medium w-9 h-9 border-2 rounded-full hover:bg-gray-600 hover:text-white"
          >
            {">"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cx("wrapper")}>
      {dataPagination ? (
        <div className="m-1">
          <div className="flex gap-1">
            <b
              className="font-medium hover:underline"
              onClick={() =>
                previousPath ? navigate(previousPath) : navigate("/")
              }
            >
              Trở lại
            </b>
            {">>"} <p> Sim {title}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl mb-2">Sim {title}</h1>
            <em className="text-orange-500 font-medium">
              {dataPagination.products.total.toLocaleString("vn")} sim
            </em>
          </div>
          <Filter />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-2">
            {dataPagination.products.data.map((product, index) => {
              const networkImage =
                dataPagination.mobile_networks.find(
                  (img) => img.id === product.mobile_networks_id
                )?.image || image404;
              return (
                <div
                  key={index}
                  onClick={() => handleProductClick(product.number)}
                  className="cursor-pointer"
                >
                  <div className="font-normal p-3 rounded border hover:border-red-600">
                    <img src={networkImage} alt="" className="w-15 h-7" />
                    <h4 className="font-medium text-xl">
                      {FormatSimNumber(product.number.toString())}
                    </h4>
                    <p className="text-green-700 font-normal">
                      {product.price.toLocaleString("vn")} Đ
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 pagination flex justify-center items-center">
            {renderPaginationButtons()}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
