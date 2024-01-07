import React from "react";

type Props = {
  label: string;
  options: { label: string; value: string }[];
};
type SelectProps = Props & React.ComponentPropsWithoutRef<"select">;

//DRY
const Select = ({
  label,
  id,
  name,
  onChange,
  options,
  value,
}: SelectProps): JSX.Element => {
  return (
    <>
      <label htmlFor={id} className="text-base font-medium text-header">
        {label}
      </label>
      <select
        name={name}
        role="combobox"
        id={id}
        className="h-8 text-base bg-header text-main-text"
        onChange={onChange}
        value={value}
        tabIndex={0}
      >
        {options.map((option, index) => {
          return (
            <option key={`${option.label + index}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
