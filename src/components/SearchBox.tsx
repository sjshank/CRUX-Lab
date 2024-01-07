import { FormEvent, useCallback } from "react";
import Button from "../ui/Button";
import { useAppDispatch } from "../app/storeHooks";
import { fetchMetrics } from "../features/metrics/MetricSlice";
import InputTextArea from "../ui/InputTextArea";
import { useMultipleUrl } from "../hooks/useMultipleUrl";
import SearchForm from "./SearchForm";
import { clearAllFilter } from "../features/filter/FilterSlice";

const SearchBox = (): JSX.Element => {
  const [multipleUrls, updateUrls] = useMultipleUrl();
  const dispatch = useAppDispatch();

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(clearAllFilter());

      Array.isArray(multipleUrls) &&
        multipleUrls.forEach((url: string) => {
          dispatch(fetchMetrics({ url: url, formFactor: "DESKTOP" }));
          dispatch(fetchMetrics({ url: url, formFactor: "PHONE" }));
        });
    },
    [multipleUrls, dispatch]
  );
  return (
    <section role="search">
      <SearchForm handleSubmit={handleSearch}>
        <>
          <div className="">
            <InputTextArea
              label="URL(s)"
              id="url"
              name="url"
              placeholder="Enter one or more url(s) using comma"
              onChange={(e) => updateUrls(e)}
            />
            <p className="text-xs text-gray-500">
              urls : [https://example.com, https://example.com]
            </p>
          </div>
          <Button
            type="submit"
            title="Search"
            label="Search"
            disabled={multipleUrls.length === 0}
          />
        </>
      </SearchForm>
    </section>
  );
};

export default SearchBox;
