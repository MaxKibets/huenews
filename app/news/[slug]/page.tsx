import React from "react";

import { DUMMY_NEWS } from "@/components/newsList/dummyNews";
import Acticle from "@/components/article/article";
import { notFound } from "next/navigation";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ params: { slug } }) => {
  const articleData = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!articleData) {
    notFound();
  }

  return <Acticle {...articleData} />;
};

export default NewsDetailPage;
