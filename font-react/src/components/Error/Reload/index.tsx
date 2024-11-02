import { memo, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Error.module.css";
import imageNodata from "@/assets/img/no-data.png";
import Loading from "@/components/Loading";

interface ReloadProps {
  onRefetch: () => void;
}

const cx = classNames.bind(styles);

const Reload: React.FC<ReloadProps> = ({ onRefetch }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    setLoad(true);
    const timeLoad = setTimeout(() => {
      onRefetch();
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timeLoad);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      {!load ? (
        <div className={cx("no-data-container")}>
          <div className={cx("no-data-icon")}>
            <span role="img" aria-label="no data">
              <img src={imageNodata} alt="No Data" className="w-72" />
            </span>
          </div>
          <h2 className={cx("warning", "text-red-600 font-bold text-xl mt-4")}>
            Error: 404
          </h2>
          <p className={cx("error", "text-gray-800 mt-2 text-center")}>
            Không tìm thấy dữ liệu nào để hiển thị. Vui lòng tải lại!
          </p>
          <button
            onClick={handleReload}
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition duration-200 font-semibold shadow-md transform hover:scale-105"
          >
            Tải lại
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default memo(Reload);
