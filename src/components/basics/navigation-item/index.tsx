import React from "react";
import Link from "next/link";

import styles from "./NavigationItem.module.sass";

interface INavigationItem extends React.AnchorHTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
  href: string;
}

export const NavigationItem: React.FC<INavigationItem> = ({ children, className, isActive, href }) => {
  return (
    <li title="navigation-item" className={`${styles.navigationItem} ${isActive ? `${styles.active}` : ""}`}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};
