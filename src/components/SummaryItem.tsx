import React from "react";
import { TFormFactor } from "../types";
import { TPercentileStatus } from "../types/cruxMetric";

type ItemProps = {
  formFactor: TFormFactor;
  percentileStatus: TPercentileStatus;
  skey: string;
};

// summary content - each item
const SummaryItem: React.FunctionComponent<ItemProps> = ({
  formFactor,
  percentileStatus,
  skey,
}: ItemProps): JSX.Element => {
  return (
    <li
      aria-label="Summary Item"
      className="leading-8 font-serif text-base tracking-wide"
      role="listitem"
    >
      A URL on <span className="lowercase">{formFactor}</span> has{" "}
      <span className="font-semibold" style={{ color: percentileStatus.color }}>
        {percentileStatus.status}&nbsp;
      </span>
      {skey}
    </li>
  );
};
const MemoizedSummaryItem = React.memo(SummaryItem);
export default MemoizedSummaryItem;
