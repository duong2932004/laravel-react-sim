import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosAlert } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { DataSearch, ResultSearch } from "@/interface/PhoneNumber";
import useDebounce from "@/hooks/useDebounce";
import { searchGet } from "@/services/Search";
import { AiOutlineLoading } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import config from "@/config";
const cx = classNames.bind(styles);
function Search() {
  const navigate = useNavigate();

  const { register, watch, setValue } = useForm<DataSearch>({
    defaultValues: { search: "" },
  });

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [result, setResult] = useState<ResultSearch[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedValue = useDebounce(watch("search"), 500);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setValue("search", "");
      setResult([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await searchGet(debouncedValue);
        if (result.status == 200) {
          setResult(result.data);
        } else {
          setResult([]);
        }
      } catch (error) {
        console.error("Error fetching phone numbers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ")) {
      return;
    }
    setSearchValue(e.target.value);
    setValue("search", e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setValue("search", "");
    setResult([]);
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
    setValue("search", "");
    setResult([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          autoComplete="off"
          {...register("search")}
          ref={inputRef}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          onChange={handleChange}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className="w-full min-w-96 py-2 px-3 rounded-full focus:outline-none inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        />

        {!loading && searchValue && (
          <button
            className="absolute top-1 right-1"
            onClick={handleClearSearch}
          >
            <TiDelete fontSize={"30px"} />
          </button>
        )}

        {loading && (
          <AiOutlineLoading
            className="animate-spin absolute right-1 top-1 text-indigo-500"
            fontSize={"30px"}
          />
        )}
      </div>

      {show && (
        <div
          id="search-result"
          className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4"
        >
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
                    {result.length > 0 ? (
                      result.map((item, index) => (
                        <li
                          onMouseDown={() => handleResult(item.number)}
                          onClick={() => handleResult(item.number)}
                          key={index}
                          className="hover:bg-gray-500 p-1 rounded font-medium"
                          dangerouslySetInnerHTML={{
                            __html: `${highlightText(
                              `${item.mobile_network_name} - ${item.number}`,
                              searchValue
                            )}`,
                          }}
                        />
                      ))
                    ) : (
                      <>
                        {!loading ? (
                          <li className="hover:bg-gray-500 p-1 rounded">
                            Không có kết quả tìm kiếm nào!
                          </li>
                        ) : (
                          <li className="hover:bg-gray-500 p-1 rounded">
                            Đang tải...
                          </li>
                        )}
                      </>
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
