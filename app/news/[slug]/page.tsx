import React from "react";
import { notFound } from "next/navigation";

import { getAllNews } from "@/lib/news";
import Acticle from "@/components/article/article";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ params: { slug } }) => {
  const articleData = getAllNews().find((news) => news.slug === slug);

  if (!articleData) {
    notFound();
  }

  return <Acticle {...articleData} />;
};

export default NewsDetailPage;
