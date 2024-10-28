import DefaultLayout from "@/layouts/DefaultLayout";
import { ChildrenITF } from "@/interface/Children";
import classNames from "classnames/bind";
import styles from "./LayoutMain.module.css";
import Sidebar from "@/components/Sidebar";
import { SideBarLoading } from "@/services/Home";
import { useEffect, useState } from "react";
import { SidebarResult } from "@/interface/PhoneNumber";
import Loading from "@/components/Loading";
const cx = classNames.bind(styles);

function LayoutMain({ children }: ChildrenITF) {
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
      } else {
        console.log("Failed to fetch sidebar data");
      }
    };
    fetchAPI();
  }, []);
  return (
    <>
      {loading == false ? (
        <DefaultLayout>
          <div className="grid grid-cols-12 m-auto max-w-screen-lg gap-2">
            <div className="col-span-12 md:col-span-8">{children}</div>
            <div className="hidden  md:block col-span-4 ">
              <Sidebar dataSidebar={sidebar} priceOptions={priceOptions} />
            </div>{" "}
          </div>

          <section className="icon">
            <div
              className={`${cx(
                "icon-phone-number"
              )} fixed left-1 bottom-1 bg-white p-3 rounded-2xl font-extrabold text-white`}
            >
              <a href="tel:0337684944">033.768.4944</a>
            </div>
            <div className="icon-messenger">
              <img
                src="https://th.bing.com/th?id=OIP.u1ZWhAN0ReLPokl0ROhHcwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Messenger"
                className="fixed bottom-20 right-1 w-12 h-12 rounded-lg"
              />
            </div>
            <div className="icon-zalo">
              <a
                href="https://zalo.me/0337684944"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://th.bing.com/th?id=OIP.Pw2ayYokefN7Q8ifxnd39wHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="Zalo"
                  className="fixed bottom-3 right-1 w-12 h-12 rounded-lg"
                />
              </a>
            </div>
          </section>
        </DefaultLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default LayoutMain;
