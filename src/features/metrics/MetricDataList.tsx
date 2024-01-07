import React, { Suspense } from "react";
import { useAppSelector } from "../../app/storeHooks";
import FormFactorFilter from "../../components/FormFactorFilter";
import MetricFilter from "../../components/MetricFilter";
import StatusBar from "../../components/StatusBar";
import { TMetricData } from "../../types/cruxMetric";
import Loader from "../../ui/Loader";
const LazyCardComponent = React.lazy(() => import("../../components/Card"));

// Render result in card format for single/multiple query
const MetricDataList = () => {
  const { metricData, isLoading } = useAppSelector((state) => state.metrics);
  const { formFactor } = useAppSelector((state) => state.filter);

  const content =
    metricData.length > 0 ? (
      <>
        <div className="flex flex-col lg:flex-row md:flex-row justify-between justify-self-auto">
          <div className="self-center">
            <div className="inline-flex">
              <MetricFilter /> <FormFactorFilter />
            </div>
          </div>
          <div className="self-center">
            <StatusBar />
          </div>
        </div>
        {metricData.map((data: TMetricData) => {
          const isFormFactorMatched =
            formFactor === "ALL" || formFactor === data.formFactor;
          return (
            <React.Fragment key={data.recordId}>
              {isFormFactorMatched && (
                <Suspense fallback={<Loader />}>
                  <LazyCardComponent metricData={data} />
                </Suspense>
              )}
            </React.Fragment>
          );
        })}
      </>
    ) : (
      <>
        {!isLoading && (
          <p role="alert" className="text-center">
            No records available
          </p>
        )}
        {isLoading && (
          <p className="text-center">
            <Loader />
          </p>
        )}
      </>
    );

  return (
    <section role="list" className="mt-5 p-2 lg:w-3/4 w-full">
      <h4
        aria-labelledby="CRUX Metric Data"
        className="p-4 text-center text-3xl font-serif font-semibold text-header"
      >
        CRUX Metric Data
      </h4>

      {content}
    </section>
  );
};

export default MetricDataList;
