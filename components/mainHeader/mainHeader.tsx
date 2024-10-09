import React from "react";
import Link from "next/link";

import css from "./mainHeader.module.css";
import NavLink from "../navLink/navLink";

const MainHeader: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/" className={css.link}>
          HueNews
        </Link>
      </div>

      <nav>
        <ul className={css.list}>
          {["/news", "/archive"].map((href) => (
            <NavLink key={href} href={href}>
              {href.slice(1)}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
