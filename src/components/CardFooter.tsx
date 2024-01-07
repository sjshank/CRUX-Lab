import React from "react";
import { TPeriodCollection } from "../types/cruxMetric";

type CardFooterProps = TPeriodCollection;

const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  firstDate,
  lastDate,
}: CardFooterProps): JSX.Element => {
  const sDate = firstDate
    ? new Date(
        firstDate.year + "-".concat(firstDate.month + "-" + firstDate.day)
      ).toLocaleDateString()
    : "";
  const eDate = lastDate
    ? new Date(
        lastDate.year + "-".concat(lastDate.month + "-" + lastDate.day)
      ).toLocaleDateString()
    : "";
  return (
    <div className="flex flex-row justify-stretch justify-items-stretch">
      <p className="text-left text-xs p-2 italic font-mono text-red-700">
        <sup>*</sup>
        {`The collection period for above data is from ${sDate} to ${eDate}`}
      </p>
    </div>
  );
};
const MemoizedCardFooter = React.memo(CardFooter);
export default MemoizedCardFooter;
