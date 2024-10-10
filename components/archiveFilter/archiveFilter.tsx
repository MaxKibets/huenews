import React from "react";
import Link from "next/link";

import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";

import css from "./archiveFilter.module.css";

type ArchiveFilterProps = {
  year: string | undefined;
  month: string | undefined;
};

const ArchiveFilter: React.FC<ArchiveFilterProps> = async ({ year, month }) => {
  const availableYears = await getAvailableNewsYears();
  const availableNewsMonths = year ? await getAvailableNewsMonths(year) : [];

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableNewsMonths.includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  let links = availableYears;

  if (year && !month) {
    links = availableNewsMonths;
  }

  if (year && month) {
    links = [];
  }

  return (
    <>
      <h2>Arcticles archive page</h2>
      <ul className={css.list}>
        {links.map((link: string) => (
          <li key={link}>
            <Link
              href={year ? `/archive/${year}/${link}` : `/archive/${link}`}
              className={css.link}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArchiveFilter;
