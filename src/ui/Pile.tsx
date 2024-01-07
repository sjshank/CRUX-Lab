import React from "react";

type PileProps = {
  val: number;
  duration: string;
};

const Pile = ({ val, duration }: PileProps): JSX.Element => {
  return (
    <>
      <div
        role="status"
        className="w-9 bg-gray-200 rounded h-2.5 dark:bg-gray-800 me-2"
      >
        <div
          className="h-2.5 rounded bg-blue-accent"
          style={{ width: `${val}%` }}
        ></div>
      </div>
      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
        {`${val.toFixed(2)}%`}
      </span>
    </>
  );
};

const MemoizedPile = React.memo(Pile);

export default MemoizedPile;
