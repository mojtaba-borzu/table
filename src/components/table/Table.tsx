//libraries
import React, { useState } from "react";

//icons
import Sort_Icon from "./icons/Sort_Icon";
import Edit_icon from "./icons/Edit_icon";
import Trush_icon from "./icons/Trush_icon";
import Chevron_left_icon from "./icons/Chevron_left_icon";
import ArrowUp_table_icon from "./icons/ArrowUp_table_icon";

//components
import SearchItem from "./search/SearchItem";
import SimplePagination from "./pagination/SimplePagination";

function Table({
  sort = { label: "", sorting: "" },
  total,
  search,
  setSort,
  headers,
  bodyList,
  pageSize,
  handleEdit,
  handleSearch,
  handleDelete,
}: {
  total: number;
  pageSize: number;
  headers: Array<any>;
  setSort?: any;
  bodyList: Array<any>;
  handleEdit?: (e) => void;
  handleSearch?: (e) => void;
  handleDelete?: (e) => void;
  search?: null | string | number;
  sort?: { label: string | null | boolean; sorting: string };
}) {
  //instance
  const [deleteItem, setDeleitem] = useState<null | object>(null);
  const [idDeatails, setIdDetails] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortStatus, setSortStatus] = useState(0);
  const [detailsStatus, setDetailsStatus] = useState(false);

  return (
    <div dir="rtl" className="w-full h-full flex  flex-col items-center">
      <div
        onClick={() => {
          detailsStatus && setDetailsStatus(false);
          sortStatus && setSortStatus(0);
        }}
        className="w-full border rounded-[12px]"
      >
        <div className="w-full flex flex-row justify-between items-center px-[20px]">
          <div
            className="w-[300px] h-[32px] my-[5px] text-[16px] font-semibold
         flex justify-center items-center"
          ></div>
          <div className="w-[300px] h-[32px] my-[5px] border rounded-[12px] flex items-center">
            <SearchItem search={search} setSearch={(e) => handleSearch(e)} />
          </div>
        </div>

        <div className="flex flex-col border-t">
          <div className="py-1 inline-block min-w-full ">
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
                    {headers.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className=" text-sm font-medium text-gray-900 px-6 py-1 text-right border-l "
                      >
                        <div className="flex flex-row justify-between items-center gap-[10px] ">
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
                              className="text-gray-500"
                            >
                              <Sort_Icon />
                            </span>
                            <div
                              className={` -mr-[25px] absolute w-[70px] overflow-hidden  shadow-lg duration-300  delay-200  ${
                                sortStatus == item.id
                                  ? "h-[50px] border mt-[80px] "
                                  : "h-0 mt-[20px]"
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
                  {bodyList.map((item, index) => (
                    <tr
                      key={index}
                      className={`  ${
                        index % 2 ? "bg-white" : "bg-gray-100"
                      } border-b`}
                    >
                      {Object.values(bodyList[index]).map(
                        (value: any, index) => (
                          <td
                            key={index}
                            className="px-6 py-1 whitespace-nowrap text-[14px] text-start font-medium text-gray-900 border-l"
                          >
                            <div
                              className={` w-full flex items-center   ${
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
                                className={` w-10/12 duration-300 rounded-[12px] overflow-hidden ${
                                  detailsStatus && idDeatails == item
                                    ? "my-[10px] max-h-[100px] border border-blue-400"
                                    : "max-h-0 border border-transparent "
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
                                          <div
                                            key={index}
                                            className="text-[12px] "
                                          >
                                            {value}
                                          </div>
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
                          <button
                            onClick={() => handleEdit(item)}
                            className=" py-[2px]  text-blue-500  "
                          >
                            <Edit_icon />
                          </button>
                          <button
                            onClick={() => setDeleitem(item)}
                            className="py-[5px] text-red-500 "
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
        <div className=" flex justify-center py-[2px]">
          <SimplePagination
            className="pagination-bar"
            currentPage={pageNumber}
            totalCount={total}
            pageSize={pageSize}
            onPageChange={(e: number) => {
              setPageNumber(e);
            }}
          />
        </div>
      </div>
      {deleteItem && (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center">
          <div className="w-full h-full fixed top-0 left-0 bg-black opacity-40"></div>
          <div className="relative w-[300px] h-[150px] bg-white z-10 rounded-[12px] flex flex-col  items-center px-[10px] py-[30px] ">
            <span> از حذف این آیتم مطمئن هستید؟</span>
            <div className="mt-[30px] w-full flex flex-row  items-center justify-center gap-[20px]">
              <button
                onClick={() => {
                  handleDelete(deleteItem);
                  setDeleitem(null);
                }}
                className="w-[100px] h-[40px] border rounded-[12px] bg-red-500 text-white text-[14px]"
              >
                حذف
              </button>
              <button
                onClick={() => setDeleitem(null)}
                className="w-[100px] h-[40px] border rounded-[12px] text-[14px]"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
