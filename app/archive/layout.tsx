import React from "react";

type ArchiveLayoutProps = {
  archive: React.ReactNode;
  latest: React.ReactNode;
};

const ArchiveLayout: React.FC<ArchiveLayoutProps> = ({ archive, latest }) => {
  return (
    <>
      <h1>News Archive</h1>
      <section>{archive}</section>
      <section>{latest}</section>
    </>
  );
};

export default ArchiveLayout;
