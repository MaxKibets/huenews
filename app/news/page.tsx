import React from "react";

import NewsList from "@/components/newsList/newsList";
import { DUMMY_NEWS } from "@/data/dummyNews";

const NewsPage: React.FC = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
