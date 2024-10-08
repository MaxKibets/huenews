import React from "react";

import { DUMMY_NEWS } from "@/components/newsList/dummyNews";
import Acticle from "@/components/article/article";

type NewsDetailPageProps = {
  params: {
    slug: string;
  };
};

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ params }) => {
  const newsSlug = params.slug;
  const newsData = DUMMY_NEWS.find((news) => news.slug === newsSlug) || {
    image: "",
    title: "",
    date: "",
    content: "",
  };

  return <Acticle {...newsData} />;
};

export default NewsDetailPage;
