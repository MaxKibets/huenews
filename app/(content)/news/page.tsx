import React from "react";
import { NextPage } from "next/types";

import { getAllNews } from "@/lib/news";
import NewsList from "@/components/newsList/newsList";

const NewsPage: NextPage = () => {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
