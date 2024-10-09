import React from "react";
import Link from "next/link";

import css from "./archiveFilter.module.css";

type ArchiveFilterProps = {
  heading: string;
  links: {
    href: string;
    text: string;
  }[];
  children: React.ReactNode;
};

const ArchiveFilter: React.FC<ArchiveFilterProps> = ({ children, heading, links }) => {
  return (
    <section className={css.filterWrap}>
      <h2>{heading}</h2>
      <ul className={css.list}>
        {links.map(({ href, text }) => (
          <li key={text}>
            <Link href={href} className={css.link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
};

export default ArchiveFilter;
