import React from "react";

import Error from "@/components/error/error";

const ArticleNotFoundPage: React.FC = () => {
  return (
    <Error
      title="Acrticle Not Found!"
      description="The requested article could not be found!"
    />
  );
};

export default ArticleNotFoundPage;
