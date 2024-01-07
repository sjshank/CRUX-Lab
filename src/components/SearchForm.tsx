import React from "react";

type FormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  children: JSX.Element;
};

const SearchForm = ({ handleSubmit, children }: FormProps) => {
  return (
    <form
      role="form"
      className="relative mb-4 sm:w-35rem w-full inline-flex self-center items-end gap-3"
      noValidate
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default SearchForm;
