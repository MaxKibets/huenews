import React from "react";
import Image from "next/image";
import Link from "next/link";

import { News } from "@/lib/news";

import css from "./article.module.css";

const Article: React.FC<News> = ({ image, title, date, content, slug }) => {
  return (
    <article>
      <div>
        <Link href={`/news/${slug}/image`} className={css.image}>
          <Image src={`/images/news/${image}`} alt={title} fill />
        </Link>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Article;
