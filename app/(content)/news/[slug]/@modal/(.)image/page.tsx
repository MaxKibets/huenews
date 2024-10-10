import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";
import Modal from "@/components/modal/modal";

type InterceptedImagePageProps = {
  params: {
    slug: string;
  };
};

const InterceptedImagePage: NextPage<InterceptedImagePageProps> = async ({
  params: { slug },
}) => {
  const articleData = await getNewsItem(slug);

  if (!articleData) {
    notFound();
  }

  return (
    <Modal>
      <Image src={`/images/news/${articleData.image}`} alt={articleData.title} fill />
    </Modal>
  );
};

export default InterceptedImagePage;
