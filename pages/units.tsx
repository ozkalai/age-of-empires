import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";

import { Table } from "../src/components/table";
import { CostFilter } from "../src/components/cost-filter";
import rawData from "../src/data/units.json";
import { ICost, IUnit } from "../src/typing/Unit";
import styles from "../src/styles/pages/Units.module.sass";
import { Button, ButtonGroup, Box } from "@mui/material";

interface IFilterCosts {
  type: keyof ICost;
  range: [number, number];
}

const ages = ["All", "Dark", "Feudal", "Castle", "Imperial"];
const costs: IFilterCosts[] = [
  { type: "Wood", range: [0, 200] },
  { type: "Food", range: [0, 200] },
  { type: "Gold", range: [50, 150] },
];

const Units: NextPage = () => {
  const [units, setUnits] = useState<IUnit[]>(rawData.units as IUnit[]);
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedCost, setSelectedCost] = useState<IFilterCosts[]>();

  useEffect(() => {
    if (selectedAge !== "All") {
      const filteredByAge = rawData.units?.filter((a) => selectedAge === a.age);

      setUnits(filteredByAge as IUnit[]);
    } else {
      setUnits(rawData.units as IUnit[]);
    }
  }, [selectedAge, selectedCost]);

  const updateSelectedCosts = (costType: keyof ICost, isChecked: boolean) => {
    if (!isChecked) {
      const newCosts = costs.filter((c) => c.type === costType);
      if (selectedCost) {
        setSelectedCost([...selectedCost, newCosts[0]]);
      } else {
        setSelectedCost(newCosts);
      }
    } else {
      const updatedCosts = selectedCost?.filter((c) => c.type !== costType);
      setSelectedCost(updatedCosts);
    }
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
                <Box key={age} bgcolor="black" color="white">
                  <Button>{age}</Button>
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
          <CostFilter costType={c.type} key={i + 1} range={c.range} updateSelectedCosts={updateSelectedCosts} />
        ))}
      </div>
      <Table data={units} />
    </div>
  );
};
export default Units;
