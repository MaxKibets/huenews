import React from "react";
import { NextPage } from "next/types";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const MarketingLayout: NextPage<MarketingLayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default MarketingLayout;
