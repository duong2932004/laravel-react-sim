import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import { ValueLoading } from "@/services/PhoneNumber";
import { LoadPageResult } from "@/interface/PhoneNumber";
import image404 from "@/assets/img/404.jpg";
import { FormatSimNumber } from "@/utils/FormatSimNumber";
import Filter from "@/components/Filter";
import { useNavigation } from "@/utils/Navigation";
import Err500 from "@/components/Error/500";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import Reload from "@/components/Error/Reload";
const cx = classNames.bind(styles);

function Home() {
  const { NavigateMobileNetwork } = useNavigation();

  const {
    data: dataLoadPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["loadPageData"],
    queryFn: async () => {
      const response = await ValueLoading();
      if (response.data.status === 200) {
        return response.data.data as LoadPageResult;
      }
      throw new Error("Không thể tải dữ liệu trang chủ");
    },
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });

  useEffect(() => {
    if (
      !dataLoadPage ||
      !dataLoadPage.products ||
      !dataLoadPage.mobile_networks ||
      !dataLoadPage.category ||
      dataLoadPage.mobile_networks.length === 0 ||
      dataLoadPage.category.length === 0 ||
      dataLoadPage.products.length === 0
    ) {
      const timer = setTimeout(() => {
        refetch();
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [dataLoadPage, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error.message);
    return <Err500 />;
  }

  if (
    !dataLoadPage ||
    !dataLoadPage.products ||
    !dataLoadPage.mobile_networks ||
    !dataLoadPage.category ||
    dataLoadPage.mobile_networks.length === 0 ||
    dataLoadPage.category.length === 0 ||
    dataLoadPage.products.length === 0
  ) {
    return <Reload onRefetch={refetch} />;
  }

  return (
    <div className={cx("wrapper")}>
      <h1 className="font-semibold text-2xl">Sim số đẹp</h1>
      <span>Bạn cần số SIM như thế nào?</span>
      <Filter />

      {dataLoadPage.products.map((pro, index) => (
        <div key={index} className="">
          <div>
            <h3 className="font-medium text-2xl mb-1">
              {pro.mobile_network_name}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {pro.products.map((product, idx) => {
                const networkImage =
                  dataLoadPage.mobile_networks.find(
                    (img) => img.id === product.mobile_networks_id
                  )?.image || image404;
                return (
                  <Link key={idx} to={"thong-tin/" + product.number}>
                    <div className="font-normal p-3 rounded border hover:border-red-600">
                      <img src={networkImage} alt="" className="w-15 h-7" />
                      <h4 className="font-medium text-xl">
                        {FormatSimNumber(product.number.toString())}
                      </h4>
                      <p className="text-green-700 font-normal">
                        {product.price.toLocaleString("vn")} Đ
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <br />
            <div className="text-end">
              <button
                onClick={() => {
                  NavigateMobileNetwork(pro.mobile_network_name);
                }}
                className={`${cx(
                  "btn-more"
                )} px-4 py-3 bg-red-700 mt-2 rounded-2xl text-white font-normal`}
              >
                Xem thêm {pro.mobile_network_name}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
