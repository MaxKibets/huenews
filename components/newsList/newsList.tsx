import React from "react";
import Link from "next/link";
import Image from "next/image";

import css from "./newsList.module.css";

type NewsItem = {
  id: string;
  slug: string;
  image: string;
  title: string;
};

type NewsListProps = {
  news: NewsItem[];
};

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <ul className={css.newsList}>
      {news.map(({ id, slug, image, title }) => (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <div className={css.image}>
              <Image src={`/images/news/${image}`} alt={title} fill />
            </div>
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
