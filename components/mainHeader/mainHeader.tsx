import React from "react";
import Link from "next/link";

import css from "./mainHeader.module.css";

const MainHeader: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">HueNews</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
