import React from "react";
import { notFound } from "next/navigation";
import { NextPage } from "next/types";

import { getNewsItem } from "@/lib/news";
import Acticle from "@/components/article/article";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

const NewsDetailPage: NextPage<NewsDetailPageProps> = async ({ params: { slug } }) => {
  const news = await getNewsItem(slug);

  if (!news) {
    notFound();
  }

  return <Acticle {...news} />;
};

export default NewsDetailPage;
