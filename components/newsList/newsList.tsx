import React from "react";
import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "./dummyNews";

import css from "./newsList.module.css";

const NewsList: React.FC = () => {
  return (
    <ul className={css.newsList}>
      {DUMMY_NEWS.map(({ id, slug, image, title }) => (
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
