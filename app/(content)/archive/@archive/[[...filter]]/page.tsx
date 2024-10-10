import React, { Suspense } from "react";

import ArchiveFilter from "@/components/archiveFilter/archiveFilter";
import FilteredNews from "@/components/filteredNews/filteredNews";

type FilteredNewsPageProps = {
  params: { filter: string[] | undefined };
};

const FilteredNewsPage: React.FC<FilteredNewsPageProps> = async ({
  params: { filter },
}) => {
  const selectedYear = filter?.shift();
  const selectedMonth = filter?.pop();

  return (
    <>
      <Suspense fallback={<center>Loading filters...</center>}>
        <ArchiveFilter year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<center>Loading news...</center>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
