import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div id="home">
      <Image src="/images/logo.jpg" alt="A newspaper" width={130} height={130} />
      <h1>A News Site For The Next Generation</h1>
      <p>Next News is here to deliver you all the latest news - concise & unbiased!</p>

      <p>
        NextNews aims to provide you with the latest news in a concise and unbiased
        manner. We strive to deliver the news in a way that is easy to understand and to
        the point. We want to keep you informed without overwhelming you with unnecessary
        information.
      </p>

      <p>
        We employ a team of dedicated journalists who are committed to delivering the news
        in a fair and unbiased manner. Our team is passionate about keeping you informed
        and up to date with the latest news.
      </p>

      <p>
        <Link href="/news">Read the latest news</Link>
      </p>
    </div>
  );
};

export default HomePage;
