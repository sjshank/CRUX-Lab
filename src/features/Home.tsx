import { useState } from "react";
import SearchBox from "../components/SearchBox";
import MetricDataList from "./metrics/MetricDataList";

// Home/Landing page of application
const Home = (): JSX.Element => {
  const [urls, setUrls] = useState<string[]>([]);
  const handleSearchAction = (urls: string[]) => {
    setUrls(urls);
  };
  return (
    <article className="flex flex-col justify-center items-center">
      {/* Search section */}
      <SearchBox doSearch={handleSearchAction} />
      {/* Result section */}
      <MetricDataList urls={urls} />
    </article>
  );
};

export default Home;
