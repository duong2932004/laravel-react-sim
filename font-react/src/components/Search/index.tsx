import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoIosAlert } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Search.module.css";
import config from "@/config";
import { SearchValue } from "@/services/Search";

interface SearchResult {
  number: string;
  mobile_network_name: string;
}

const cx = classNames.bind(styles);

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data: allSimData = [], isLoading } = useQuery<SearchResult[]>({
    queryKey: ["simData"],
    queryFn: async () => {
      const response = await SearchValue();
      console.log(response.data);

      if (!response.data) return [];
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const getFilteredResults = () => {
    if (!searchValue.trim()) return [];

    const searchTerm = searchValue.toLowerCase();
    return allSimData
      .filter((item) => {
        const fullText =
          `${item.mobile_network_name} - ${item.number}`.toLowerCase();

        if (searchTerm.includes("*")) {
          const [prefix, suffix] = searchTerm.split("*");
          return (
            (!prefix || item.number.toLowerCase().startsWith(prefix)) &&
            (!suffix || item.number.toLowerCase().endsWith(suffix))
          );
        }

        return fullText.includes(searchTerm);
      })
      .slice(0, 50);
  };

  const filteredResults = getFilteredResults();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ")) return;
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const handleResult = (result: string) => {
    navigate(config.routes.routes.detail(result));
    setSearchValue("");
    setShow(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          type="text"
          placeholder="Tìm kiếm số sim..."
          className="w-full lg:min-w-96 py-2 px-3 rounded-full focus:outline-none inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          autoComplete="off"
        />

        {!isLoading && searchValue && (
          <button
            className="absolute top-1 right-1"
            onClick={handleClearSearch}
          >
            <TiDelete fontSize={"30px"} />
          </button>
        )}

        {isLoading && (
          <AiOutlineLoading
            className="animate-spin absolute right-1 top-1 text-indigo-500"
            fontSize={"30px"}
          />
        )}
      </div>

      {show && (
        <div className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div
              className={`${cx("scroll-filter")} max-h-60 overflow-y-auto p-4`}
            >
              {!searchValue ? (
                <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <IoIosAlert color="red" />
                  </div>
                  <div>
                    <p>
                      Tìm sim có số <strong>6789 </strong> bạn hãy nhập{" "}
                      <strong>6789 </strong>
                    </p>
                    <p>
                      Tìm sim bắt đầu bằng <strong>0988</strong> bạn hãy nhập{" "}
                      <strong>0988</strong>
                    </p>
                    <p>
                      Tìm sim có đầu <strong>098</strong> đuôi{" "}
                      <strong>888</strong> hãy gõ <strong>098*888</strong>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <ul>
                    {filteredResults.length > 0 ? (
                      filteredResults.map((item, index) => (
                        <li
                          onMouseDown={() => handleResult(item.number)}
                          onClick={() => handleResult(item.number)}
                          key={index}
                          className="hover:bg-gray-500 p-1 rounded font-medium cursor-pointer"
                          dangerouslySetInnerHTML={{
                            __html: highlightText(
                              `${item.mobile_network_name} - ${item.number}`,
                              searchValue
                            ),
                          }}
                        />
                      ))
                    ) : (
                      <li className="hover:bg-gray-500 p-1 rounded">
                        {isLoading
                          ? "Đang tải..."
                          : "Không có kết quả tìm kiếm nào!"}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
