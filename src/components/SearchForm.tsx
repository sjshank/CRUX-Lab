import React from "react";

type FormProps = {
  handleSubmit: (e: React.FormEvent) => void;
  children: JSX.Element;
};

// form container for search input box
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

const MemoizedSearchForm = React.memo(SearchForm);
export default MemoizedSearchForm;
