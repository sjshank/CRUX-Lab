import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/storeHooks";
import { filterByFormFactor } from "../features/filter/FilterSlice";
import ConnectedFilter from "./ConnectedFilter";

const FORM_FACTOR_OPTIONS = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Desktop",
    value: "DESKTOP",
  },
  {
    label: "Phone",
    value: "PHONE",
  },
];

const FormFactorFilter = (): JSX.Element => {
  const { formFactor } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  //Handle user filter action
  const handleFormFactorChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      dispatch(filterByFormFactor(e.currentTarget.value));
    },
    [dispatch]
  );
  const filterProps = {
    label: "Form Factor",
    name: "formFactorFilter",
    id: "formFactor",
    onChange: handleFormFactorChange,
    options: FORM_FACTOR_OPTIONS,
    value: formFactor,
  };
  return <ConnectedFilter {...filterProps} />;
};

export default FormFactorFilter;
