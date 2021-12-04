import React from "react";
import Link from "next/link";

import { NavigationItem } from "..";
import styles from "./Navigation.module.sass";

export const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>🛡</div>
      <ul className={styles.list}>
        <NavigationItem isActive>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/unit">
            <a>Units</a>
          </Link>
        </NavigationItem>
      </ul>
    </div>
  );
};
