import React from "react";

type ErrorProps = {
  errMsg: string;
};

const ErrorBar = ({
  errMsg = "Something went wrong ! Please try again.",
}: ErrorProps): JSX.Element => {
  return (
    <div
      role="alert"
      aria-label="error"
      className="flex flex-row justify-center justify-items-center"
    >
      <p className="text-left text-lg font-medium  text-red-600 capitalize">
        {errMsg}
      </p>
    </div>
  );
};
const MemoizedErrorBar = React.memo(ErrorBar);
export default MemoizedErrorBar;
