"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import css from "./navLink.module.css";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${css.link} ${path.startsWith(href) ? css.active : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
