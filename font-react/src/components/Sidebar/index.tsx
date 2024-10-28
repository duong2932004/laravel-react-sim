import classNames from "classnames/bind";
import styles from "./Sidebar.module.css";
import { SideBar } from "@/interface/PhoneNumber";

const cx = classNames.bind(styles);
function Sidebar(props: SideBar) {
  const popular_keywords = [
    "Sim Tứ Quý 9",
    "Sim Tam Hoa 0",
    "Sim Tam Hoa 5",
    "Sim Tứ Quý 0",
    "Sim Tam Hoa 1",
    "Sim Tam Hoa 2",
    "Sim Tam Hoa 3",
    "Sim Tứ Quý 8",
    "Sim Tam Hoa 4",
    "Sim Tam Hoa 7",
    "Sim Tứ Quý 1",
    "Sim Tứ Quý 7",
    "Sim Tam Hoa 9",
    "Sim Tứ Quý 2",
    "Sim Tứ Quý 6",
    "Sim Tứ Quý 3",
    "Sim Tứ Quý 5",
    "Sim Tam Hoa 8",
    "Sim Tứ Quý 4",
    "Sim Tam Hoa 6",
  ];

  return (
    <div className={cx("wrapper")}>
      <h2 className="font-medium mb-2">SIM THEO MẠNG</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {props.dataSidebar.mobile_networks.map((value) => {
          return (
            <button
              key={value.id}
              className="mr-1 mb-2 px-3 py-2 bg-gray-200 border rounded hover:border-red-500"
            >
              <img src={value.image} alt="" className="bg-cover w-full h-7" />
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {props.dataSidebar.strat_numbers.map((value) => {
          return (
            <button
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
              value={value.value}
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
              key={value.id}
              className="mr-1 mb-2 p-1 bg-gray-200 border rounded hover:border-red-500"
            >
              {value.name}
            </button>
          );
        })}
      </div>
      <h2 className="font-medium mb-2">LOẠI SIM</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {popular_keywords.map((value, index) => {
          return (
            <button
              key={index}
              className="mr-1 mb-2 p-1 bg-gray-200 border rounded hover:border-red-500"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
