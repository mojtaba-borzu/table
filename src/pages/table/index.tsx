import React, { useState } from "react";
import ArrowUp_table_icon from "../../components/common/icons/ArrowUp_table_icon";

import SimplePagination from "../../components/material/pagination/SimplePagination";
import SearchItem from "../../components/material/search/SearchItem";
import Chevron_left_icon from "../../components/common/icons/Chevron_left_icon";
import Trush_icon from "../../components/common/icons/Trush_icon";
import Edit_icon from "../../components/common/icons/Edit_icon";

const titleList = [
  { id: 2, label: "نام انگلیسی", sort: false },
  { id: 1, label: "نام فارسی", sort: true },
];
const bodyList: any = [
  { id: 1, en_Name: "samsung", fa_Name: "سامسونگ" },
  { id: 2, en_Name: "apple", fa_Name: "اپل" },
  { id: 3, en_Name: "xiomi", fa_Name: "شیایومی" },
  { id: 4, en_Name: "howawi", fa_Name: "هووای" },
  {
    id: 5,
    en_Name: "samsung",
    fa_Name: [
      "سامسونگ",
      { name: "اسم", phone: "a53" },
      { name: "اسم", phone: "a52" },
    ],
  },
  { id: 6, en_Name: "apple", fa_Name: "اپل" },
  {
    id: 7,
    en_Name: [
      "xiomi",
      { name: "اسم", phone: "Note_10" },
      { name: "اسم", phone: "Note_10_pro" },
    ],
    fa_Name: "شیایومی",
  },
  { id: 8, en_Name: "howawi", fa_Name: "هووای" },
  { id: 9, en_Name: "samsung", fa_Name: "سامسونگ" },
  { id: 10, en_Name: "apple", fa_Name: "اپل" },
];

function index() {
  const [search, setSearch] = useState("");
  const [sortStatus, setSortStatus] = useState(0);
  const [sort, setSort] = useState({ label: "", sorting: "" });
  const [detailsStatus, setDetailsStatus] = useState(false);
  const [idDeatails, setIdDetails] = useState(0);
  const [listBrand, setListBran] = useState(bodyList);

  return (
    <div dir="rtl" className="w-full h-full flex  flex-col items-center ">
      <div
        onClick={() => {
          detailsStatus && setDetailsStatus(false);
          sortStatus && setSortStatus(0);
        }}
        className="w-full border rounded-[12px]"
      >
        <div className="w-full flex flex-row justify-between items-center px-[20px]">
          <div
            className="w-[300px] h-[32px] my-[5px] text-[20px] font-semibold
         flex justify-center items-center"
          ></div>
          <div className="w-[300px] h-[32px] my-[5px] border rounded-[12px] flex items-center">
            <SearchItem search={search} setSearch={setSearch} />
          </div>
        </div>

        <div className="flex flex-col border-t">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-1 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full table-auto">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-1 py-1   text-center border-l"
                      >
                        ردیف
                      </th>
                      {titleList.map((item, index) => (
                        <th
                          key={index}
                          scope="col"
                          className=" text-sm font-medium text-gray-900 px-6 py-1 text-right border-l "
                        >
                          <div className="flex flex-row justify-between items-center gap-[10px] typography-fn-button-small">
                            <span className="truncate"> {item.label}</span>

                            <div
                              className={`relative cursor-pointer flex flex-row items-center gap-[5px] ${
                                item.sort ? "visible" : "invisible"
                              }`}
                            >
                              <span
                                onClick={() => {
                                  if (sortStatus == item.id) {
                                    setSortStatus(0);
                                  } else {
                                    setSortStatus(item.id);
                                  }
                                }}
                              >
                                مرتب سازی
                              </span>
                              <div
                                className={` -mr-[20px] absolute w-[100px] overflow-hidden  shadow-lg duration-300  delay-200  ${
                                  sortStatus == item.id
                                    ? "h-[80px] border mt-[120px] "
                                    : "h-0 mt-[45px]"
                                } rounded-[12px]  bg-white `}
                              >
                                <div
                                  onClick={() => {
                                    setSort({
                                      label: item.label,
                                      sorting: "up",
                                    });
                                    setSortStatus(0);
                                  }}
                                  className={`py-[2px] w-full flex flex-row justify-between items-center  px-[10px] rounded-[12px] ${
                                    sort.label && sort.sorting == "up"
                                      ? "bg-blue-400 text-white"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <span>بالا</span>
                                  <span>
                                    <ArrowUp_table_icon />
                                  </span>
                                </div>
                                <div className="w-full h-[1px] bg-gray-100"></div>
                                <div
                                  onClick={() => {
                                    setSort({
                                      label: item.label,
                                      sorting: "down",
                                    });
                                    setSortStatus(0);
                                  }}
                                  className={`w-full py-[2px] flex flex-row items-center justify-between  px-[10px] rounded-[12px] ${
                                    sort.label && sort.sorting == "down"
                                      ? "bg-blue-400 text-white"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  <span>پایین</span>
                                  <span className="rotate-180">
                                    <ArrowUp_table_icon />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {listBrand.map((item, index) => (
                      <tr
                        key={index}
                        className={` ${
                          index % 2 ? "bg-white" : "bg-gray-100"
                        } border-b`}
                      >
                        {Object.values(listBrand[index]).map(
                          (value: any, index) => (
                            <td
                              key={index}
                              className="px-6 py-1 whitespace-nowrap text-sm text-start font-medium text-gray-900 border-l"
                            >
                              <div
                                className={` w-full flex items-center typography-fn-body-small  ${
                                  index == 0
                                    ? "justify-center "
                                    : "justify-between "
                                }`}
                              >
                                <span className="py-1">
                                  {typeof value != "object" ? value : value[0]}
                                </span>
                                {typeof value == "object" && (
                                  <>
                                    <span
                                      onClick={() => {
                                        setDetailsStatus(!detailsStatus);
                                        setIdDetails(item);
                                      }}
                                      className={` ${
                                        detailsStatus && idDeatails == item
                                          ? " rotate-90 "
                                          : " -rotate-90 "
                                      } duration-300 cursor-pointer w-[20px] h-[20px] rounded-full text-blue-600 opacity-80 hover:opacity-100 bg-gray-300 flex justify-center items-center`}
                                    >
                                      <Chevron_left_icon />
                                    </span>
                                  </>
                                )}
                              </div>

                              {typeof value == "object" && (
                                <div
                                  className={` w-full duration-300 rounded-[12px] overflow-hidden ${
                                    detailsStatus && idDeatails == item
                                      ? "my-[10px] max-h-[100px] border "
                                      : "max-h-0"
                                  }`}
                                >
                                  {value
                                    .slice(1, value.length)
                                    .map((item, index) => (
                                      <div
                                        key={index}
                                        className="my-[4px] flex flex-row items-center justify-between px-[12px] gap-2"
                                      >
                                        {Object.values(value[index + 1]).map(
                                          (value: any, index) => (
                                            <div key={index}>{value}</div>
                                          )
                                        )}
                                      </div>
                                    ))}
                                </div>
                              )}
                            </td>
                          )
                        )}

                        <td className=" border-l">
                          <div className="w-full flex justify-center gap-[20px]">
                            <button className=" py-[2px]  text-blue-500  typography-fn-button-small">
                              <Edit_icon />
                            </button>
                            <button
                              onClick={() => {
                                setListBran(
                                  listBrand.filter((row) => row != item)
                                );
                              }}
                              className="py-[5px] text-red-500 typography-fn-button-small"
                            >
                              <Trush_icon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center py-[2px]">
          <SimplePagination
            className="pagination-bar"
            currentPage={1}
            totalCount={100}
            pageSize={10}
            onPageChange={(e: number) => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
