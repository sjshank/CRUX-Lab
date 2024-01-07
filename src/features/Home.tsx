import SearchBox from "../components/SearchBox";
import MetricDataList from "./metrics/MetricDataList";

const Home = (): JSX.Element => {
  return (
    <article className="flex flex-col justify-center items-center">
      <SearchBox />
      <MetricDataList />
    </article>
  );
};

export default Home;
