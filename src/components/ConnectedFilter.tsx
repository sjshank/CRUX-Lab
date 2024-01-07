import React from "react";
import Select from "../ui/Select";

type Props = {
  label: string;
  options: { label: string; value: string }[];
};

type FilterProps = Props & React.ComponentPropsWithoutRef<"select">;

const ConnectedFilter: React.FunctionComponent<FilterProps> = (
  inputProps: FilterProps
): JSX.Element => {
  return (
    <div
      aria-label="filter"
      className="mb-2 mt-2 flex flex-row justify-start justify-items-start lg:justify-end md:justify-end lg:justify-items-end md:justify-items-end"
    >
      <div className="hs-dropdown relative flex flex-col p-2 w-44">
        <Select {...inputProps} />
      </div>
    </div>
  );
};
const MemoizedConnectedFilter = React.memo(ConnectedFilter);
export default MemoizedConnectedFilter;
