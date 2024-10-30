import classNames from "classnames/bind";
import Header from "@/components/Header";
import styles from "./DefaultLayout.module.css";
import { ChildrenDefaultLayoutITF } from "@/interface/Children";
import Footer from "@/components/Footer";
import { SideBarLoading } from "@/services/Home";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { SidebarResult } from "@/interface/PhoneNumber";
const cx = classNames.bind(styles);

function DefaultLayout({ children }: ChildrenDefaultLayoutITF) {
  const priceOptions = [
    { value: "0-500000", label: "< 500 K" },
    { value: "500000-1000000", label: "500 - 1 Tr" },
    { value: "1000000-3000000", label: "1 - 3 Tr" },
    { value: "3000000-5000000", label: "3 - 5 Tr" },
    { value: "5000000-10000000", label: "5 - 10 Tr" },
    { value: "10000000-30000000", label: "10 - 30 Tr" },
    { value: "30000000-50000000", label: "30 - 50 Tr" },
    { value: "50000000-80000000", label: "50 - 80 Tr" },
    { value: "80000000-100000000", label: "80 - 100 Tr" },
    { value: "100000000-150000000", label: "100 - 150 Tr" },
    { value: "150000000-200000000", label: "150 - 200 Tr" },
    { value: "200000000-300000000", label: "200 - 300 Tr" },
    { value: "300000000-500000000", label: "300 - 500 Tr" },
    { value: "500000000-1000000000", label: "500 - 1 Tỷ" },
    { value: "1000000000-10000000000000", label: "> 1 Tỷ" },
  ];
  const [sidebar, setSidebar] = useState<SidebarResult>({
    mobile_networks: [],
    category: [],
    strat_numbers: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const value = await SideBarLoading();
      if (value.data.status === 200) {
        setSidebar(value.data.data);
        setLoading(false);
        console.log(value.data.data);
      } else {
        console.log("Failed to fetch sidebar data");
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className={cx("wrapper")}>
      {!loading ? (
        <>
          <Header priceOptions={priceOptions} dataSidebar={sidebar} />

          <main className="pt-28 md:pt-14 lg:pt-14 min-h-96 pb-10">
            {/* Thanh navigation đầy đủ ở màn hình lớn */}
            <div
              className={`${cx("bottom-header")} hidden md:block h-max mb-2`}
            >
              <nav className="m-auto max-w-screen-lg">
                <ul className="flex justify-between py-3 text-base">
                  <li>
                    <a className="hover:underline">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>{children(sidebar, priceOptions)}</div>
          </main>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default DefaultLayout;
