import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/storeHooks";
import { toggleStatus } from "../features/filter/FilterSlice";

//render status filter section
const StatusBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.filter);

  const handleStatusClick = useCallback(
    (e: React.SyntheticEvent<HTMLLIElement>, text: string) => {
      e.preventDefault();
      dispatch(toggleStatus(status === text ? "" : text));
    },
    [dispatch, status]
  );

  const statusContent = (text: string, color: string) => {
    return (
      <li
        tabIndex={0}
        className={`text-lg lg:mt-4 md:mt-4 mt-1 font-medium p-2 transition duration-150 ease-in-out hover:scale-125 hover:underline cursor-pointer ${
          status === text ? "font-bold text-xl underline" : ""
        }`}
        style={{ color: color }}
        onClick={(e) => handleStatusClick(e, text)}
      >
        {text}
      </li>
    );
  };
  return (
    <ul role="group" aria-label="status filter" className="flex flex-row m-2">
      {statusContent("Good", "rgb(25, 134, 57)")}
      {statusContent("Average", "rgb(255, 155, 80)")}
      {statusContent("Poor", "rgb(179, 19, 18)")}
    </ul>
  );
};

export default StatusBar;
