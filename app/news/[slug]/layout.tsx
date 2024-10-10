import { NextPage } from "next/types";
import React from "react";

type NewsDetailLayoutProps = {
  children: React.ReactNode;
};

const NewsDetailLayout: NextPage<NewsDetailLayoutProps> = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;
