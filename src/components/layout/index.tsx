import React from "react";

import { Navigation } from "../navigation";
import styles from "./Layout.module.sass";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className={styles.content}>{children}</div>
    </>
  );
};
