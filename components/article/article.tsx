import React from "react";
import Image from "next/image";

import css from "./article.module.css";

type ArticleProps = {
  image: string;
  title: string;
  date: string;
  content: string;
};

const Article: React.FC<ArticleProps> = ({ image, title, date, content }) => {
  return (
    <article>
      <div>
        <div className={css.image}>
          <Image src={`/images/news/${image}`} alt={title} fill />
        </div>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default Article;
