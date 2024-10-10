import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllNews } from "@/lib/news";

type ImagePageProps = {
  params: {
    slug: string;
  };
};

const ImagePage: NextPage<ImagePageProps> = ({ params: { slug } }) => {
  const articleData = getAllNews().find((news) => news.slug === slug);

  if (!articleData) {
    notFound();
  }

  return (
    <div style={{ position: "relative", height: "80vh" }}>
      <Image
        style={{ objectFit: "contain" }}
        src={`/images/news/${articleData.image}`}
        alt={articleData.title}
        fill
      />
    </div>
  );
};

export default ImagePage;
