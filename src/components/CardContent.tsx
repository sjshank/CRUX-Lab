import React from "react";
import Bar from "./Bar";
import { TDensitiesInPercent, TPercentileStatus } from "../types/cruxMetric";

type TContent = {
  id?: number | string;
  abbrev: string;
  percentileStatus: TPercentileStatus;
  densities: TDensitiesInPercent[];
};
type CardContentProps = TContent;

const CardContent = ({
  abbrev,
  densities,
  percentileStatus,
}: CardContentProps): JSX.Element => {
  return (
    <div role="gridcell" className="flex flex-col w-full mb-4 min-h-40 p-2">
      <div className="flex flex-row gap-2 justify-items-start justify-start">
        <span
          aria-label="Metric Abbrevation"
          className="text-2xl font-serif font-semibold self-center"
        >
          {abbrev}
        </span>
        <span
          className="text-base font-medium"
          style={{ color: percentileStatus?.color }}
        >
          <i>{percentileStatus.p75}</i> {abbrev === "CLS" ? "" : "ms"}
        </span>
      </div>
      <div className="gap-3 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
        {densities &&
          densities.map((density: TDensitiesInPercent) => {
            return <Bar key={density.densityInPercent} density={density} />;
          })}
      </div>
    </div>
  );
};
const MemoizedCardContent = React.memo(CardContent);
export default MemoizedCardContent;
