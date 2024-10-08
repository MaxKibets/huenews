import React from "react";

import MainHeader from "@/components/mainHeader/mainHeader";

import "./globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
