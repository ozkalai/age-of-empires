import React from "react";

import styles from "./NavigationItem.module.sass";

interface INavigationItem extends React.AnchorHTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
}

export const NavigationItem: React.FC<INavigationItem> = ({ children, className, isActive }) => {
  return <li className={`${styles.navigationItem} ${isActive ? `${styles.active}` : ""}`}>{children}</li>;
};
