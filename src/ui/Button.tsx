import React from "react";

type Props = {
  label: string;
};

type ButtonProps = Props & React.ComponentPropsWithoutRef<"button">;

const Button = ({ label, type, title, disabled }: ButtonProps) => {
  return (
    <button
      className="text-page bg-header border-0 py-2 px-5 focus:outline-none rounded text-lg disabled:opacity-40 self-center"
      type={type}
      title={title}
      aria-label={title}
      tabIndex={0}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
const MemoizedButton = React.memo(Button);
export default MemoizedButton;
