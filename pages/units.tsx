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
  range: number[];
  isChecked: boolean;
  value: number[];
}

const ages = ["All", "Dark", "Feudal", "Castle", "Imperial"];
const costs: IFilterCosts[] = [
  { type: "Wood", range: [0, 200], isChecked: false, value: [0, 200] },
  { type: "Food", range: [0, 200], isChecked: false, value: [0, 200] },
  { type: "Gold", range: [50, 150], isChecked: false, value: [50, 150] },
];

const Units: NextPage = () => {
  const [units, setUnits] = useState<IUnit[]>(rawData.units as IUnit[]);
  const [selectedAge, setSelectedAge] = useState("All");
  const [costFilter, setCostFilter] = useState<IFilterCosts[]>(costs);

  const getValueCost = (costType: keyof ICost, range: number[], value: any) => {
    switch (costType) {
      case "Wood":
        if (range[0] < value && range[1] > value) return true;
        break;
      case "Food":
        if (range[0] < value && range[1] > value) return true;
        break;
      case "Gold":
        if (range[0] < value && range[1] > value) return true;
        break;
      default:
        return false;
        break;
    }
  };

  useEffect(() => {
    let data = [...rawData.units];

    if (selectedAge !== "All") {
      data = data.filter((a) => selectedAge === a.age);
    }

    const selectedCosts = costFilter.filter((c) => c.isChecked);

    if (selectedCosts.length > 0) {
      selectedCosts.forEach(
        (c) =>
          (data = data.filter((i) => {
            // true or false

            if (i.cost) {
              const val = i.cost[c.type];
              return getValueCost(c.type, c.value, val);
            } else {
              return false;
            }
          })),
      );
    }

    setUnits(data as IUnit[]);
  }, [selectedAge, costFilter]);

  const updateSelectedCosts = (costType: keyof ICost) => {
    setCostFilter((filter) => {
      return filter.map((f) => {
        if (f.type === costType) {
          return {
            ...f,
            isChecked: !f.isChecked,
          };
        }
        return f;
      });
    });
  };

  const updateCostRange = (value: number[], costType: keyof ICost) => {
    setCostFilter((filter) => {
      return filter.map((f) => {
        if (f.type === costType) {
          return {
            ...f,
            value,
          };
        }
        return f;
      });
    });
  };

  useEffect(() => {
    const checkedCosts = costFilter.filter((i) => i.isChecked === true);
  }, [costFilter]);

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
        {costFilter.map((c, i) => (
          <CostFilter
            key={i + 1}
            isChecked={c.isChecked}
            costType={c.type}
            range={c.range}
            value={c.value}
            updateSelectedCosts={updateSelectedCosts}
            updateCostRange={updateCostRange}
          />
        ))}
      </div>
      <Table data={units} />
    </div>
  );
};
export default Units;
