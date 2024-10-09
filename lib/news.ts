import { DUMMY_NEWS } from "@/data/dummyNews";

export type News = {
  id: string;
  title: string;
  image: string;
  content: string;
  date: string;
  slug: string;
};

export function getAllNews(): News[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): News[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): string[] {
  return getAllNews()
    .reduce((years, news) => {
      const year: number = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [] as number[])
    .sort((a, b) => b - a)
    .map((year) => year.toString());
}

export function getAvailableNewsMonths(year: string): string[] {
  return getAllNews()
    .reduce((months, news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month: number = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [] as number[])
    .sort((a, b) => b - a)
    .map((months) => months.toString());
}

export function getNewsForYear(year: string): News[] {
  return getAllNews().filter((news) => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year: string, month: string): News[] {
  return getAllNews().filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;

    return newsYear === +year && newsMonth === +month;
  });
}
