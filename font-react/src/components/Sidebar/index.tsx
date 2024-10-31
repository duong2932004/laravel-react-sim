import classNames from "classnames/bind";
import styles from "./Sidebar.module.css";
import { SideBar } from "@/interface/PhoneNumber";
import { useNavigation } from "@/utils/Navigation";
const cx = classNames.bind(styles);
function Sidebar(props: SideBar) {
  const {
    NavigateMobileNetwork,
    NavigateStartNumber,
    NavigateCategory,
    NavigatePrice,
    NavigateKeyWord,
  } = useNavigation();
  const popular_keywords = [
    { name: "Sim Tứ Quý 9", value: "9999" },
    { name: "Sim Tam Hoa 0", value: "000" },
    { name: "Sim Tam Hoa 5", value: "555" },
    { name: "Sim Tứ Quý 0", value: "0000" },
    { name: "Sim Tam Hoa 1", value: "111" },
    { name: "Sim Tam Hoa 2", value: "222" },
    { name: "Sim Tam Hoa 3", value: "333" },
    { name: "Sim Tứ Quý 8", value: "8888" },
    { name: "Sim Tam Hoa 4", value: "444" },
    { name: "Sim Tam Hoa 7", value: "777" },
    { name: "Sim Tứ Quý 1", value: "1111" },
    { name: "Sim Tứ Quý 7", value: "7777" },
    { name: "Sim Tam Hoa 9", value: "999" },
    { name: "Sim Tứ Quý 2", value: "2222" },
    { name: "Sim Tứ Quý 6", value: "6666" },
    { name: "Sim Tứ Quý 3", value: "3333" },
    { name: "Sim Tứ Quý 5", value: "5555" },
    { name: "Sim Tam Hoa 8", value: "888" },
    { name: "Sim Tứ Quý 4", value: "4444" },
    { name: "Sim Tam Hoa 6", value: "666" },
  ];

  return (
    <div className={cx("wrapper")}>
      <h2 className="font-medium mb-2">SIM THEO MẠNG</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {props.dataSidebar.mobile_networks.map((value) => {
          return (
            <button
              onClick={() => NavigateMobileNetwork(value.name)}
              key={value.id}
              className="mr-1 mb-2 px-3 py-2 bg-gray-200 border rounded hover:border-red-500"
            >
              <img src={value.image} alt="" className="bg-cover w-full h-7" />
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {props.dataSidebar.start_numbers.map((value) => {
          return (
            <button
              onClick={() => NavigateStartNumber(value.name)}
              key={value.id}
              className="mr-1 mb-2 px-3 py-2 bg-gray-200 border rounded hover:border-red-500"
            >
              {value.name}
            </button>
          );
        })}
      </div>
      <h2 className="font-medium mb-2">SIM THEO GIÁ</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {props.priceOptions.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => NavigatePrice(value.value)}
              className="mr-1 mb-2 p-1 bg-gray-200 border rounded hover:border-red-500"
            >
              {value.label}
            </button>
          );
        })}
      </div>
      <h2 className="font-medium mb-2">LOẠI SIM</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {props.dataSidebar.category.map((value) => {
          return (
            <button
              onClick={() => NavigateCategory(value.label)}
              key={value.id}
              className="mr-1 mb-2 p-1 bg-gray-200 border rounded hover:border-red-500"
            >
              {value.name}
            </button>
          );
        })}
      </div>
      <h2 className="font-medium mb-2">Các từ khóa phổ biến</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {popular_keywords.map((value, index) => {
          return (
            <button
              onClick={() => NavigateKeyWord(value.value)}
              key={index}
              className="mr-1 mb-2 p-1 bg-gray-200 border rounded hover:border-red-500"
            >
              {value.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
