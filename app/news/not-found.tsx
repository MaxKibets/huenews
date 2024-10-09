import React from "react";
import { NextPage } from "next/types";

import Error from "@/components/error/error";

const ArticleNotFoundPage: NextPage = () => {
  return (
    <Error
      title="Acrticle Not Found!"
      description="The requested article could not be found!"
    />
  );
};

export default ArticleNotFoundPage;
