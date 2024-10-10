import React from "react";
import { NextPage } from "next/types";

import MainHeader from "@/components/mainHeader/mainHeader";

type ContentLayoutProps = {
  children: React.ReactNode;
};

const ContentLayout: NextPage<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <MainHeader />
      {children}
    </div>
  );
};

export default ContentLayout;
