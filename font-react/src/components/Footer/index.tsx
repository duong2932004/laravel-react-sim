import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import classNames from "classnames/bind";
import styles from "./Footer.module.css";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <>
      <hr />
      <footer
        className={`${cx(
          "footer"
        )} footer container mx-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-3 pb-16 lg:pb-0`}
      >
        <div className={cx("ft-1")}>
          <h3 className="font-bold">
            <div className="title">CÔNG TY CỔ PHẦN SIM.VN</div>
            <div className="contact flex items-center gap-2 p-2 w-6/12 border border-3 rounded-2xl mt-2">
              <div className="contact1">
                <FiPhone color="red" />
              </div>
              <div className="contact2">
                <p className="font-normal">Hotline</p>
                <h4 className="text-xl text-red-600">094.132.6699</h4>
              </div>
            </div>
            <div className="info">
              <div className="flex my-2">
                <h4 className="font-bold">Giờ mở cửa: </h4>
                <p className="font-normal">08:00 - 21:00</p>
              </div>
              <p className="font-normal">info@sim.vn</p>
            </div>
          </h3>
        </div>

        <div className={cx("ft-2")}>
          <div className="flex flex-col">
            <div className="title font-bold">THÔNG TIN</div>
            <div className="flex flex-col space-y-2">
              <Link to="#" className="hover:underline">
                Điều khoản và điều kiện
              </Link>
              <Link to="#" className="hover:underline">
                Chính sách bảo mật
              </Link>
              <Link to="#" className="hover:underline">
                Chính sách đổi trả
              </Link>
              <Link to="#" className="hover:underline">
                Cách mua sim và thanh toán
              </Link>
              <Link to="#" className="hover:underline">
                Liên hệ
              </Link>
              <Link to="#" className="hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className={cx("ft-3")}>
          <div className="font-bold title">TẢI ỨNG DỤNG SIM.VN</div>
          <div className="app flex gap-4 my-2">
            <img
              src="https://sim.vn/static/theme/images/google-play.svg"
              alt="Google Play"
              className="w-40"
            />
            <img
              src="https://sim.vn/static/theme/images/app-store.svg"
              alt="App Store"
              className="w-40"
            />
          </div>
          <div className="font-bold title">CHỨNG NHẬN KẾT NỐI</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
