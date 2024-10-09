import React from "react";

import { getAllNews } from "@/lib/news";
import NewsList from "@/components/newsList/newsList";

const NewsPage: React.FC = () => {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
