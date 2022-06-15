//libraries
import React, { useEffect, useState } from "react";
import { useDebounce } from "rooks";
import Close_icon from "../icons/Close_icon";

function SearchNews({
  search,
  setSearch,
}: {
  search: string | number | null;
  setSearch: any;
}) {
  const setValueDebounced = useDebounce((term) => setSearch(term), 500);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowInput(false), 10);
  }, [showInput]);
  return (
    <div className="   w-full h-[56px] ">
      <div className="w-full   h-[56px]  bg-base-light-surface dark:bg-base-dark-surface rounded-[12px] flex flex-row justify-between items-center px-[17.69px] gap-[8px]">
        <div className="flex felx-row items-center gap-[8px]">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
                fill="#999999"
              />
            </svg>
          </span>
          {!showInput && (
            <input
              defaultValue={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValueDebounced(e.currentTarget.value);
              }}
              className="w-full  h-full bg-base-light-surface dark:bg-base-dark-surface text-base-text-light-1 typography-fn-button-small dark:text-base-text-dark-1   px-[10px] outline-none"
              placeholder="جستجو"
            />
          )}
        </div>
        {search && (
          <div
            onClick={() => {
              setShowInput(true);
              setSearch("");
            }}
            className="w-[32px] h-[32px] rounded-full flex justify-center items-center duration-150 active:scale-90 cursor-pointer text-base-text-light-3 dark:text-base-text-dark-3    bg-base-light-background dark:bg-base-dark-background"
          >
            <svg width="12" height="11" viewBox="0 0 12 11" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99995 4.43929L10.1893 0.249586L11.2499 1.31025L7.06061 5.49995L11.2499 9.68928L10.1893 10.7499L5.99995 6.56061L1.81068 10.7499L0.750023 9.68928L4.93929 5.49995L0.749986 1.31074L1.81065 0.250078L5.99995 4.43929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchNews;
