import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import Search from "@/components/Search";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBar } from "@/interface/PhoneNumber";

const cx = classNames.bind(styles);

function Header(props: SideBar) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${cx("wrapper")} fixed top-0 right-0 left-0 z-50`}>
      <div className={`${cx("top-header")} w-full`}>
        <div className="py-2 m-auto max-w-screen-lg flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img
                src="https://sim.vn/static/theme/images/logo_white.svg"
                className="w-3/5"
                alt=""
              />
            </Link>
          </div>

          <div
            className="hamburger-menu text-white md:hidden border-2 rounded"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>

          <div className="search hidden md:block">
            <Search />
          </div>

          <div className="info font-medium text-white hidden md:block">
            <button>Giới thiệu</button>
          </div>
        </div>
      </div>

      {/* Thanh navigation đầy đủ ở màn hình lớn */}
      {/* <div className={`${cx("bottom-header")} hidden lg:block h-max`}>
        <nav className="m-auto max-w-screen-lg">
          <ul className="flex justify-between py-3 text-base">
            <li>
              <Link to={"/"} className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tin tức
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </div> */}

      {/* Search box khi màn hình nhỏ */}
      {!isMenuOpen && (
        <div className={`${cx("top-header")} search md:hidden w-full pb-1 p-3`}>
          <Search />
        </div>
      )}

      {/* Navigation khi ở màn hình nhỏ sẽ hiển thị theo toggle */}
      {isMenuOpen && (
        <div className={`${cx("menu-scroll")} bg-white md:hidden h-max p-2`}>
          <h1 className="font-medium text-xl">Danh mục</h1>
          <hr />
          <ul className=" grid grid-cols-2 justify-center items-center text-center gap-2 mt-2">
            <li className="bg-red-600 rounded-xl p-1 text-white font-light ">
              <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                Trang chủ
              </Link>
            </li>
            <li className="bg-red-600 rounded-xl p-1 text-white font-light">
              <a href="#">Giới thiệu</a>
            </li>
            <li className="bg-red-600 rounded-xl p-1 text-white font-light">
              <a href="#">Tin tức</a>
            </li>
            <li className="bg-red-600 rounded-xl p-1 text-white font-light">
              <a href="#">Sản phẩm</a>
            </li>
            <li className="bg-red-600 rounded-xl p-1 text-white font-light">
              <a href="#">Liên hệ</a>
            </li>
          </ul>
          <h1 className="font-medium text-xl">SIM THEO MẠNG</h1>
          {props.dataSidebar.mobile_networks.map((value, index) => {
            return (
              <button
                key={index}
                className="px-2 py-1 rounded border-2 mr-1 mb-1"
              >
                <img src={value.image} className="w-14 h-8 bg-cover" alt="" />
              </button>
            );
          })}
          <h1 className="font-medium text-xl">SIM THEO LOẠI</h1>
          {props.dataSidebar.category.map((value, index) => {
            return (
              <button
                key={index}
                className="px-2 py-1 rounded border-2 mr-1 mb-1 bg-gray-200"
              >
                {value.name}
              </button>
            );
          })}
          <h1 className="font-medium text-xl">SIM THEO GIÁ</h1>
          {props.priceOptions.map((value, index) => {
            return (
              <button
                key={index}
                value={value.value}
                className="px-2 py-1 rounded border-2 mr-1 mb-1 bg-gray-200"
              >
                {value.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Header;
