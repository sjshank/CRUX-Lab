import { useState } from "react";
import { TFormFactor } from "../types";
import SummaryItem from "./SummaryItem";
import { TPercentileStatus } from "../types/cruxMetric";

type SummaryProps = {
  overallSummary: any;
  formFactor: TFormFactor;
};

// render overall summary of the metric
const Summary = ({ overallSummary, formFactor }: SummaryProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {Object.entries(overallSummary).length > 0 && (
        <section
          role="contentinfo"
          aria-label="summary"
          className="container mx-auto p-4 mt-3 mb-5 text-center border-t-2 border-gray-300"
        >
          <h4 className="text-xl font-medium tracking-wider">
            Overall Summary : Poor, Need improvement or Good ?{" "}
            <p
              role="link"
              className="cursor-pointer text-base text-blue-accent underline transition duration-150 ease-in-out hover:scale-125"
              onClick={() => setShow(!show)}
              tabIndex={0}
            >
              {!show ? "Show" : "Hide"}
            </p>
          </h4>
          {show && (
            <ul className="p-4" role="list">
              {Object.keys(overallSummary)?.map((sKey) => {
                if (["CLS", "LCP", "FID", "INP"].includes(sKey)) {
                  return (
                    <SummaryItem
                      skey={sKey as string}
                      percentileStatus={
                        overallSummary[sKey] as TPercentileStatus
                      }
                      formFactor={formFactor}
                      key={sKey}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          )}
        </section>
      )}
    </>
  );
};

export default Summary;
