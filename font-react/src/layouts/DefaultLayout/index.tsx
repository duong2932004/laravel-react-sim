import classNames from "classnames/bind";

import Header from "@/components/Header";
import styles from "./DefaultLayout.module.css";
import { ChildrenITF } from "@/interface/Children";
import Footer from "@/components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }: ChildrenITF) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main className="pt-28 min-h-96 pb-10">{children}</main>

      <Footer />
    </div>
  );
}
export default DefaultLayout;
