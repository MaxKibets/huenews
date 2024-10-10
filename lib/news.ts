import sql from "better-sqlite3";

const db = sql("data.db");

export type News = {
  id: string;
  title: string;
  image: string;
  content: string;
  date: string;
  slug: string;
};

// NEED MORE ASYNCHRONY!!!
// just to simulate a real-world scenario, we'll add a delay to the response

export async function getAllNews(): Promise<News[]> {
  const news = db.prepare("SELECT * FROM news").all() as News[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string): Promise<News> {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug) as News;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews(): Promise<News[]> {
  const latestNews = db.prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3").all();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return latestNews as News[];
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years.map((year) => year.year);
}

export async function getAvailableNewsMonths(year: string): Promise<string[]> {
  const month = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year) as { month: string }[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return month.map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<News[]> {
  const news = db
    .prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC")
    .all(year) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string,
): Promise<News[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
