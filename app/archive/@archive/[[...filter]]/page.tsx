import React from "react";

import NewsList from "@/components/newsList/newsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import ArchiveFilter from "@/components/archiveFilter/archiveFilter";

type FilteredNewsPageProps = {
  params: { filter: string[] | undefined };
};

const FilteredNewsPage: React.FC<FilteredNewsPageProps> = ({ params: { filter } }) => {
  const selectedYear = filter?.shift();
  const selectedMonth = filter?.pop();

  let news = null;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  const linksData = links.map((link) => ({
    href: selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`,
    text: link,
  }));

  if (
    (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
    (selectedYear &&
      selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <ArchiveFilter heading="Arcticles archive page" links={linksData}>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news found for selected period</p>
      )}
    </ArchiveFilter>
  );
  // return ;
};

export default FilteredNewsPage;
