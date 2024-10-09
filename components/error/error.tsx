import React from "react";

import css from "./error.module.css";

type ErrorProps = {
  title: string;
  description: string;
};

const Error: React.FC<ErrorProps> = ({ title, description }) => {
  return (
    <div className={css.error}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Error;
