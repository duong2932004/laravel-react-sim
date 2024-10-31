import classNames from "classnames/bind";
import styles from "../Error.module.css";
import imageNodata from "@/assets/img/no-data.png";

const cx = classNames.bind(styles);
const NoData = () => {
  return (
    <div className={cx("no-data-container")}>
      <div className={cx("no-data-icon")}>
        <span role="img" aria-label="no data">
          <img src={imageNodata} alt="" className="w-72" />
        </span>
      </div>
      <h2 className={cx("waning")}>Error: 404</h2>
      <p className={cx("error")}>
        Không tìm thấy dữ liệu nào để hiển thị. Vui lòng kiểm tra lại sau!
      </p>
    </div>
  );
};

export default NoData;
