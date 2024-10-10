import React from "react";

import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/components/newsList/newsList";

type FilteredNewsProps = {
  year: string | undefined;
  month: string | undefined;
};

const FilteredNews: React.FC<FilteredNewsProps> = async ({ year, month }) => {
  let news = null;

  if (year && !month) {
    news = await getNewsForYear(year);
  }

  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  return news && news.length > 0 ? (
    <NewsList news={news} />
  ) : (
    <p>No news found for selected period</p>
  );
};

export default FilteredNews;
