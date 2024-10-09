import React from "react";

import Error from "@/components/error/error";

const NotFoundPage: React.FC = () => {
  return (
    <Error title="Not Found!" description="The requested resource could not be found!" />
  );
};

export default NotFoundPage;
