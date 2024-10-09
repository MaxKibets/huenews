import React from "react";

import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/newsList/newsList";

const LatestPage: React.FC = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
