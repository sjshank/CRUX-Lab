import { useAppSelector } from "../app/storeHooks";
import { TMetricData, TMetricDataPoint } from "../types/cruxMetric";
import ErrorBar from "../ui/ErrorBar";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import Summary from "./Summary";
import React from "react";

type CardProps = {
  metricData: TMetricData;
};

const Card = ({ metricData }: CardProps): JSX.Element => {
  const { metricAbbrev } = useAppSelector((state) => state.filter);
  return (
    <div
      role="listbox"
      aria-label="card"
      className="w-full p-4 mb-4 flex flex-col border border-header rounded-lg drop-shadow-lg sm:p-4 bg-page "
    >
      <CardHeader formFactor={metricData.formFactor} url={metricData.url} />
      {metricData?.error?.error && (
        <ErrorBar errMsg={metricData?.error.error.message} />
      )}
      <div
        role="grid"
        className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 place-content-center gap-3 mt-2 place-items-center"
      >
        {metricData.datapoints &&
          metricData.datapoints.map((dp: TMetricDataPoint) => {
            const isMetricAbbrevMatched =
              metricAbbrev === "ALL" || metricAbbrev === dp.abbrev;
            return (
              <React.Fragment key={dp.id}>
                {isMetricAbbrevMatched && (
                  <CardContent
                    abbrev={dp.abbrev}
                    densities={dp.densitiesInPercent}
                    percentileStatus={dp.percentileStatus}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
      {metricData.overallSummary && (
        <Summary
          overallSummary={metricData.overallSummary}
          formFactor={metricData.formFactor}
        />
      )}
      {metricData?.collectionPeriod && (
        <CardFooter
          firstDate={metricData.collectionPeriod.firstDate}
          lastDate={metricData.collectionPeriod.lastDate}
        />
      )}
    </div>
  );
};

export default Card;

// ------------------------------------------------------------------------------------------------------------------------------------

// TO-DO : convert into compund design pattern

// /type TContent = {
//   id?: number | string;
//   abbrev: string;
//   percentileStatus: TPercentileStatus;
//   densities: TDensitiesInPercent[];
// };
// type CardContentProps = TContent;

// Card.Content = ({ abbrev, densities, percentileStatus }: CardContentProps) => {
//   return (
//     <div className="flex flex-col w-full mb-4 min-h-40 p-2">
//       <div className="flex flex-row gap-2 justify-items-start justify-start">
//         <span className="text-2xl font-serif font-semibold self-center">
//           {abbrev}
//         </span>
//         <span
//           className="text-base font-medium"
//           style={{ color: percentileStatus?.color }}
//         >
//           <i>{percentileStatus.p75}</i> {abbrev === "CLS" ? "" : "ms"}
//         </span>
//       </div>
//       <div className="gap-3 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
//         {densities &&
//           densities.map((density: TDensitiesInPercent) => {
//             return <Bar key={density.densityInPercent} density={density} />;
//           })}
//       </div>
//     </div>
//   );
// };
