import { useState, useEffect } from "react";
import {
  PaginationMobileNetwork,
  PaginationPage,
} from "@/services/ViewPagination";
import { Link, useParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ViewMore.module.css";
import { MobileNetwork } from "@/interface/ViewPagination";
import Filter from "@/components/Filter";
import { FormatSimNumber } from "@/utils/FormatSimNumber";
import image404 from "@/assets/img/404.jpg";

const cx = classNames.bind(styles);

export default function ViewPagination() {
  const { mobile_network_name } = useParams<{ mobile_network_name: string }>();
  const [dataPagination, setDataPagination] = useState<MobileNetwork>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      if (mobile_network_name) {
        try {
          const response = await PaginationMobileNetwork(mobile_network_name);
          setDataPagination(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        console.error("no mobile network name");
      }
    };
    fetchAPI();
  }, [mobile_network_name]);

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
    navigate(`/thong-tin/${number}`);
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
            <Link className="font-medium hover:underline" to={"/"}>
              Home
            </Link>{" "}
            {">>"} <p> Sim {mobile_network_name}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl mb-2">
              Sim {mobile_network_name}
            </h1>
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
          <div className="mt-2 pagination flex justify-between items-center">
            <div>
              {/* Trang {dataPagination.products.current_page}/
              {dataPagination.products.last_page} */}
            </div>
            {renderPaginationButtons()}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
