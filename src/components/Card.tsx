import React from "react";
import { useAppSelector } from "../app/storeHooks";
import { TMetricData, TMetricDataPoint } from "../types/cruxMetric";
import ErrorBar from "../ui/ErrorBar";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import Summary from "./Summary";

type CardProps = {
  metricData: TMetricData;
};

const Card: React.FunctionComponent<CardProps> = ({
  metricData,
}: CardProps): JSX.Element => {
  const { metricAbbrev } = useAppSelector((state) => state.filter);
  return (
    <div className="w-full p-4 mb-4 flex flex-col border border-header rounded-lg drop-shadow-lg sm:p-4 bg-page ">
      <CardHeader formFactor={metricData.formFactor} url={metricData.url} />
      {metricData?.error?.error && (
        <ErrorBar errMsg={metricData?.error.error.message} />
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 place-content-center gap-3 mt-2 place-items-center">
        {metricData.datapoints &&
          metricData.datapoints.map((dp: TMetricDataPoint) => {
            const isMetricAbbrevMatched =
              metricAbbrev === "ALL" || metricAbbrev === dp.abbrev;
            return (
              <>
                {isMetricAbbrevMatched && (
                  <CardContent
                    abbrev={dp.abbrev}
                    densities={dp.densitiesInPercent}
                    key={dp.id}
                    percentileStatus={dp.percentileStatus}
                  />
                )}
              </>
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
