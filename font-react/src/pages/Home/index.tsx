import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Home.module.css";
import { ValueLoading } from "@/services/PhoneNumber";
import { LoadPageResult } from "@/interface/PhoneNumber";
import image404 from "@/assets/img/404.jpg";
import { FormatSimNumber } from "@/utils/FormatSimNumber";
import { Link } from "react-router-dom";
import Filter from "@/components/Filter";
const cx = classNames.bind(styles);

function Home() {
  const [dataLoadPage, setDataLoadPage] = useState<LoadPageResult>({
    mobile_networks: [],
    products: [],
    category: [],
    strat_numbers: [],
  });

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await ValueLoading();
        if (result.data.status === 200) {
          const data: LoadPageResult = result.data.data;
          setDataLoadPage(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <>
        <h1 className="font-semibold text-2xl">Sim số đẹp</h1>
        <span>Bạn cần số SIM như thế nào?</span>
        <Filter />
        {dataLoadPage.products.map((pro, index) => {
          return (
            <div key={index} className="">
              <div>
                <h3 className="font-medium text-2xl mb-1">
                  {pro.mobile_network_name}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                  {pro.products.map((product, index) => {
                    const networkImage =
                      dataLoadPage.mobile_networks.find(
                        (img) => img.id === product.mobile_networks_id
                      )?.image || image404;
                    return (
                      <Link key={index} to={"thong-tin/" + product.number}>
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
                  <Link
                    to={`/sim/${pro.mobile_network_name}`}
                    className={`${cx(
                      "btn-more"
                    )} px-4 py-3 bg-red-700 mt-2 rounded-2xl text-white font-normal`}
                  >
                    Xem thêm {pro.mobile_network_name}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Home;
