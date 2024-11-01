import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { CiFilter } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

import styles from "./Filter.module.css";
import { SidebarResult } from "@/interface/PhoneNumber";
import { SideBarLoading } from "@/services/Home";

const cx = classNames.bind(styles);
function Filter() {
  const [sidebar, setSidebar] = useState<SidebarResult>({
    mobile_networks: [],
    category: [],
    start_numbers: [],
  });
  useEffect(() => {
    const fetchAPI = async () => {
      const value = await SideBarLoading();
      if (value.data.status === 200) {
        setSidebar(value.data.data);
      } else {
        console.log("Failed to fetch sidebar data");
      }
    };
    fetchAPI();
  }, []);
  const [filter1, setFilter1] = useState(false);

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
  return (
    <div className="mt-2 filter w-full border-dashed border-2 border-red-600 rounded-xl p-2">
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => setFilter1(true)}
          className={`${cx(
            "btn-filter"
          )} flex justify-center items-center px-3 py-1 rounded-2xl text-white`}
        >
          <CiFilter size={20} />
          <p className="hidden lg:block">Bộ lọc</p>
        </button>
        {filter1 && (
          <div
            className="shadow-gray-600	p-3 absolute left-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Bộ lọc tìm kiếm</h3>
                <TiDelete size={30} onClick={() => setFilter1(false)} />
              </div>
              <hr />
              <div className={cx("scroll-filter")}>
                <h4 className="font-medium my-2">Mạng di động</h4>
                <div className="mobile_network">
                  {sidebar.mobile_networks.map((network) => (
                    <button
                      key={network.id}
                      className="mr-1 mb-2 px-3 py-2 border rounded hover:border-red-500"
                    >
                      <img
                        src={network.image}
                        alt=""
                        className="bg-cover w-10 h-4"
                      />
                    </button>
                  ))}
                </div>
                <hr />
                <h4 className="font-medium my-2">Đầu số</h4>
                {sidebar.start_numbers.map((number) => (
                  <button
                    key={number.id}
                    className="mr-1 mb-2 px-3 py-1 border rounded hover:border-red-500"
                  >
                    {number.name}
                  </button>
                ))}
                <hr />
                <h4 className="font-medium my-2">Kiểu số đẹp</h4>
                {sidebar.category.map((category) => (
                  <button
                    key={category.id}
                    className="mr-1 mb-2 px-3 py-1 border rounded hover:border-red-500"
                  >
                    {category.name}
                  </button>
                ))}
                <hr />
                <h4 className="font-medium my-2">Khoảng giá</h4>
                {priceOptions.map((priceOption) => (
                  <button
                    key={priceOption.value}
                    className="mr-1 mb-2 px-3 py-1 border rounded hover:border-red-500"
                  >
                    {priceOption.label}
                  </button>
                ))}
              </div>

              <hr />
              <div className="grid grid-cols-2 mt-2 gap-2">
                <button className="py-2 px-3  border-2 border-red-600 rounded-2xl font-medium text-red-600 hover:bg-red-600 hover:text-white">
                  Đặt lại
                </button>
                <button className="py-2 px-3  border-2 border-red-600 rounded-2xl font-medium text-red-600 hover:bg-red-600 hover:text-white">
                  Lọc
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
