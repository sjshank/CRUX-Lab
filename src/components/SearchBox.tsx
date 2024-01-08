import { FormEvent, useCallback } from "react";
import Button from "../ui/Button";
import { useAppDispatch } from "../app/storeHooks";
import InputTextArea from "../ui/InputTextArea";
import { useMultipleUrl } from "../hooks/useMultipleUrl";
import SearchForm from "./SearchForm";
import { clearAllFilter } from "../features/filter/FilterSlice";

type SearchBoxProps = {
  doSearch: (urls: string[]) => void;
};

// render & handle search content, action
const SearchBox = ({ doSearch }: SearchBoxProps): JSX.Element => {
  const [multipleUrls, updateUrls] = useMultipleUrl();
  const dispatch = useAppDispatch();

  //Handle user search action
  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(clearAllFilter());
      doSearch(multipleUrls);
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
              Ex : [https://example.com, https://example.com]
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
