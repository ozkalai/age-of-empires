import React from "react";
import { useRouter } from "next/router";

import { NavigationItem } from "..";
import styles from "./Navigation.module.sass";

export const Navigation: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>🛡</div>
      <ul className={styles.list}>
        <NavigationItem href="/" isActive={asPath === "/"}>
          Home
        </NavigationItem>
        <NavigationItem href="/unit" isActive={asPath === "/unit"}>
          Units
        </NavigationItem>
      </ul>
    </div>
  );
};
