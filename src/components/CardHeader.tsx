import React from "react";
import { TRecordKey } from "../types/cruxMetric";

type CardHeaderProps = TRecordKey;

const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  formFactor,
  url,
}: CardHeaderProps): JSX.Element => {
  return (
    <div className="flex flex-row justify-between w-full gap-2">
      <h6 className="mb-2 text-base text-left break-words w-3/4 font-normal text-gray-500 ">
        {url}
      </h6>
      <p className="mb-2 text-sm w-1/4 text-right capitalize text-gray-400 sm:text-sm self-center">
        {formFactor}
      </p>
    </div>
  );
};
const MemoizedCardHeader = React.memo(CardHeader);
export default MemoizedCardHeader;
