import React from "react";

type InputProps = {
  label: string;
} & React.ComponentPropsWithoutRef<"textarea">;

//DRY
const InputTextArea = ({
  id,
  name,
  placeholder = "Input goes here...",
  value,
  onChange,
  label,
  rows = 2,
}: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={id} className="leading-7 text-xl text-header">
        {label}
      </label>
      <textarea
        role="textbox"
        rows={rows}
        style={{ resize: "none" }}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-page  border border-header  focus:border-header  text-lg outline-header text-header py-1 mt-2 px-3 leading-8 transition-colors duration-200 ease-in-out sm:w-28rem"
      />
    </>
  );
};

export default InputTextArea;
