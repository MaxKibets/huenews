import React from "react";
import { NextPage } from "next/types";

import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/newsList/newsList";
import { notFound } from "next/navigation";

const LatestPage: NextPage = async () => {
  const latestNews = await getLatestNews();

  if (!latestNews) {
    notFound();
  }

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
