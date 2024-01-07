import { useAppSelector } from "../app/storeHooks";
import { useDensity } from "../hooks/useDensity";
import { TDensitiesInPercent } from "../types/cruxMetric";
import Pile from "../ui/Pile";

type BarProps = {
  density: TDensitiesInPercent;
};

// render each metric performance datapoint
const Bar = ({ density }: BarProps) => {
  const { status } = useAppSelector((state) => state.filter);
  const { result, duration } = useDensity(
    density.densityInPercent,
    density.duration
  );
  const isStatusMatched = status === "" || result === status ? true : false;
  return (
    <>
      {isStatusMatched && (
        <dl>
          <dt className="text-base font-medium text-gray-600 dark:text-gray-500">
            {duration}
          </dt>
          <dd className="flex items-center mb-3">
            <Pile val={density.densityInPercent} />
          </dd>
        </dl>
      )}
    </>
  );
};

export default Bar;
