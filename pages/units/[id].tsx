import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import data from "../../src/data/units.json";
import { IUnit } from "@/typing/Unit";
import { renderCost } from "../../src/utils/render-cost";
import styles from "../../src/styles/pages/Detail.module.sass";

const DetailPage: NextPage = () => {
  const { query } = useRouter();

  const [unit, setUnit] = useState<IUnit | undefined>();

  useEffect(() => {
    const parsed = Number(query.id);

    if (typeof parsed === "number" && !isNaN(parsed)) {
      const _unit = data.units.find((u) => u.id === parsed);

      if (_unit) {
        setUnit(_unit as IUnit);
      }
    }
  }, [query.id]);

  if (!unit) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.detailPageContainer}>
      <div className={styles.unitId}>#{unit.id}</div>
      <div className={styles.unitName}>{unit.name}</div>
      <div className={styles.unitDescription}>{unit.description}</div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Age</span>
        <span className={styles.attrValue}>{unit.age}</span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>ICost</span>
        <span className={styles.attrValue}>{renderCost(unit.cost)}</span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Build Time</span>
        <span className={styles.attrValue}>
          {unit.build_time}
          {" ⌛"}
        </span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Reloading Time</span>
        <span className={styles.attrValue}>
          {unit.reload_time}
          {" ⌛"}
        </span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Hit Points</span>
        <span className={styles.attrValue}>
          {unit.hit_points}
          {" 🔥"}
        </span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Attack</span>
        <span className={styles.attrValue}>
          {unit.attack}
          {" 🔥"}
        </span>
      </div>
      <div className={styles.attrContainer}>
        <span className={styles.attrLabel}>Accurancy</span>
        <span className={styles.attrValue}>
          {unit.accuracy}
          {" 🎯"}
        </span>
      </div>
    </div>
  );
};
export default DetailPage;
