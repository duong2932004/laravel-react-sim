import classNames from "classnames/bind";
import styles from "../Error.module.css";
import imageError from "@/assets/img/error.png";

const cx = classNames.bind(styles);

function Err500() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className={cx("no-data-container", "text-center")}>
        <div className={cx("no-data-icon")}>
          <span role="img" aria-label="no data">
            <img src={imageError} alt="" className="w-72" />
          </span>
        </div>
        <h2 className={cx("waning")}>Error: 500</h2>
        <p className={cx("error")}>Lỗi máy chủ. Vui lòng kiểm tra lại sau!</p>
      </div>
    </div>
  );
}

export default Err500;
