import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../components/card/NewsSummaryCard";
import { newsDataType } from "../types/newsDataType";

const Category = () => {
  const allNews = useLoaderData() as newsDataType[];

  return (
    <div>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
