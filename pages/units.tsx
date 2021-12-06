import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";

import { Table } from "../src/components/table";
import { CostFilter } from "../src/components/cost-filter";
import rawData from "../src/data/units.json";
import { Cost, IUnit } from "../src/typing/Unit";
import styles from "../src/styles/pages/Units.module.sass";
import { Button, ButtonGroup, Box } from "@mui/material";

const ages = ["All", "Dark", "Feudal", "Castle", "Imperial"];
const costs = [
  { type: "Wood", range: [0, 200] },
  { type: "Food", range: [0, 200] },
  { type: "Gold", range: [50, 150] },
];

const Units: NextPage = () => {
  const [units, setUnits] = useState<IUnit[]>(rawData.units as IUnit[]);
  const [selectedAge, setSelectedAge] = useState("All");

  useEffect(() => {
    if (selectedAge !== "All") {
      const filteredByAge = rawData.units?.filter((a) => selectedAge === a.age);

      setUnits(filteredByAge as IUnit[]);
    } else {
      setUnits(rawData.units as IUnit[]);
    }
  }, [selectedAge]);

  useEffect(() => {
    console.log(units);
  }, [units]);

  const setUnitsWithCosts = (range: number[], costType: string) => {
    const newUnits = units.filter((u) => u.cost?.Wood);
    setUnits(newUnits);
  };

  return (
    <div className={styles.unitsContainer}>
      <CssBaseline />
      <div className={styles.filter}>
        <span className={styles.heading}>Ages</span>
        <ButtonGroup className={styles.buttonGroup} variant="text" color="inherit" aria-label="button-group">
          {ages.map((age) => {
            if (selectedAge === age) {
              return (
                <Box bgcolor="black" color="white">
                  <Button key={age}>{age}</Button>
                </Box>
              );
            }

            return (
              <Button key={age} onClick={() => setSelectedAge(age)}>
                {age}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
      <div className={styles.filter}>
        <span className={styles.heading}>Costs</span>
        {costs.map((c, i) => (
          <CostFilter costType={c.type} key={i + 1} range={c.range} setUnitsWithCosts={setUnitsWithCosts} />
        ))}
      </div>
      <Table data={units} />
    </div>
  );
};
export default Units;
