import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { DeatilPhoneNumber } from "@/services/PhoneNumber";
import { DetailITF } from "@/interface/PhoneNumber";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
import { usePreviousPath } from "@/contexts/PreviousPathContext";

import { FormatSimNumber } from "@/utils/FormatSimNumber";
function Detail() {
  const navigate = useNavigate();

  const [moreDoc, setMoreDoc] = useState(false);
  const { number } = useParams<{ number: string }>();
  const [phoneNumber, setPhoneNumber] = useState<DetailITF>();
  useEffect(() => {
    if (number) {
      const fecthAPI = async () => {
        const result = await DeatilPhoneNumber(number);
        if (result.status === 200) {
          setPhoneNumber(result.data.data);
        } else {
          console.error("Error fetching phone number detail:");
        }
      };
      fecthAPI();
    }
  }, [number]);
  const { previousPath } = usePreviousPath();

  return (
    <div className={cx("wrapper")}>
      {phoneNumber ? (
        <div className="m-1">
          <div className="flex gap-1">
            <b
              className="font-medium hover:underline"
              onClick={() =>
                previousPath ? navigate(previousPath) : navigate("/")
              }
            >
              Trở lại
            </b>
            {">>"} <p> Sim {phoneNumber.number}</p>
          </div>
          <hr className="my-2" />
          <h1 className="font-bold text-2xl mb-2">
            Mua sim số: {FormatSimNumber(phoneNumber.number)}
          </h1>
          <div className="p-3 border rounded-xl shadow-md shadow-gray-300 mb-2">
            <div className="flex justify-between mb-2">
              <span className="text-start font-medium">Nhà mạng:</span>
              <div className="text-end">
                <img
                  src={phoneNumber.mobile_network.image}
                  alt=""
                  className="w-28"
                />
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-start font-medium">Số sim:</span>
              <div className="text-end font-medium">{phoneNumber.number}</div>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-start font-medium">Số lượng:</span>
              <div className="text-end flex gap-1">{phoneNumber.quantity}</div>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-start font-medium">Kiểu số đẹp:</span>
              <div className="text-end flex gap-1">
                {phoneNumber.categories.map((value, index) => (
                  <span
                    key={index}
                    className="py-1 px-2 bg-gray-300 rounded text-sm"
                  >
                    {value.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-start font-medium">Đầu số đẹp:</span>
              <div className="text-end py-1 px-2 bg-blue-300 text-blue-600 rounded">
                Đầu sim số {phoneNumber.start_number.name}
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between my-2">
              <span className="text-start font-medium">Giá bán:</span>
              <div className="text-end font-bold text-red-600 text-xl">
                {phoneNumber.price.toLocaleString("vn")} VNĐ
              </div>
            </div>
            <div>
              <div className="text-center">
                <h1 className="font-bold text-2xl">Miêu tả</h1>
              </div>

              <div className={moreDoc ? "" : cx("text-clamp")}>
                <p>{phoneNumber.describe}</p>
              </div>

              <div className="text-center">
                <button
                  className="px-2 py-1 rounded text-green-500"
                  onClick={() => setMoreDoc(!moreDoc)}
                >
                  {moreDoc ? "Thu gọn" : "Xem thêm"}
                </button>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-2xl mb-2">Đặt mua sim</h1>
          <div className="p-3 border rounded-xl shadow-md shadow-gray-300 mb-2">
            <form action="" method="post">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="font-medium">
                    Họ tên <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    className="w-full border p-2 rounded-xl border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="font-medium">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    className="w-full border p-2 rounded-xl border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Điện thoại liên hệ"
                    name="phoneNumber"
                    required
                  />
                </div>
              </div>
              <div className="mt-1">
                <label htmlFor="name" className="font-medium">
                  Địa chỉ <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  className="w-full border p-2 rounded-xl border-gray-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Điện thoại liên hệ"
                  id="name"
                />
              </div>
              <div className="mt-1">
                <label htmlFor="name" className="font-medium">
                  Ghi chú
                </label>
                <br />
                <textarea
                  className="min-h-48 w-full border p-2 rounded-xl border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Gọi cho tôi ngay"
                  id="name"
                ></textarea>
              </div>
              <button
                className={`${cx(
                  "btn-submit"
                )} w-full p-3 rounded-xl text-white`}
              >
                <div>
                  <b>Đặt mua</b>
                  <p>Giao sim nhanh miên phí toàn quốc</p>
                </div>
              </button>
            </form>
          </div>
          <div className="p-3 border rounded-xl shadow-md shadow-gray-300 mb-2">
            <div className="title font-medium">
              Hướng dẫn cách thức mua sim{" "}
              <b className="text-red-400">
                {FormatSimNumber(phoneNumber.number)}
              </b>
              :
            </div>
            <div className="mb-1">
              <b>Cách 1:</b>
              <p>
                SIMVN giao sim và thu tiền tại nhà miễn phí (áp dụng tại Hà Nội,
                Tp.HCM, Đà Nẵng, Hưng Yên)
              </p>
            </div>
            <div className="mb-1">
              <b> Cách 2:</b>{" "}
              <p>
                Quý khách đến cửa hàng SIMvn tại Hà Nội, Tp.HCM, Đà Nẵng, Hưng
                Yên làm thủ tục (Xem danh sách cửa hàng ở chân trang)
              </p>
            </div>
            <div className="mb-1">
              <b> Cách 3:</b>{" "}
              <p>
                Đặt hàng trên website, gọi hotline hoặc chat với SIM.vn sau đó
                sẽ có nhân viên tiếp nhận thông tin, hồ sơ sang tên sau đó sẽ
                gửi COD hoặc giao Hỏa Tốc trong 30 phút (bạn phải hỗ trợ phí
                giao sim) đến tận nhà, nhận sim bạn kiểm tra đúng thông tin
                chính chủ và trả tiền cho bưu tá
              </p>
            </div>
            <div>
              Chúc quý khách gặp nhiều may mắn khi sở hữu thuê bao{" "}
              <b className="text-red-400">
                {FormatSimNumber(phoneNumber.number)}
              </b>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Detail;
