import React from "react";

import { NavigationItem } from "..";
import styles from "./Navigation.module.sass";

export const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>🛡</div>
      <ul className={styles.list}>
        <NavigationItem isActive>Home</NavigationItem>
        <NavigationItem>Units</NavigationItem>
      </ul>
    </div>
  );
};
