import DefaultLayout from "@/layouts/DefaultLayout";
import { ChildrenITF } from "@/interface/Children";
import classNames from "classnames/bind";
import styles from "./LayoutMain.module.css";
import Sidebar from "@/components/Sidebar";
const cx = classNames.bind(styles);

function LayoutMain({ children }: ChildrenITF) {
  return (
    <>
      <DefaultLayout>
        {(sidebar, priceOptions) => (
          <>
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
          </>
        )}
      </DefaultLayout>
    </>
  );
}

export default LayoutMain;
