import SearchBox from "../components/SearchBox";
import MetricDataList from "./metrics/MetricDataList";

// Home/Landing page of application
const Home = (): JSX.Element => {
  return (
    <article className="flex flex-col justify-center items-center">
      {/* Search section */}
      <SearchBox />
      {/* Result section */}
      <MetricDataList />
    </article>
  );
};

export default Home;
