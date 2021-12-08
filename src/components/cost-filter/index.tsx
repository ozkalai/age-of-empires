import React, { useEffect, useState, FC } from "react";
import { Checkbox, Box, Slider } from "@mui/material";

import styles from "./CostFilter.module.sass";
import { ICost } from "@typing/Unit";

interface ICostFilter {
  costType: keyof ICost;
  range: number[];
  updateSelectedCosts: (costType: keyof ICost) => void;
  isChecked: boolean;
  value: number[];
  updateCostRange: (value: number[], costType: keyof ICost) => void;
}

export const CostFilter: FC<ICostFilter> = ({
  costType,
  range,
  updateSelectedCosts,
  isChecked,
  value,
  updateCostRange,
}) => {
  const handleChange = (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => {
    updateCostRange(newValue as number[], costType);
  };

  return (
    <div className={styles.costFilterContainer}>
      <Checkbox
        data-testid="cost-check"
        onClick={() => {
          updateSelectedCosts(costType);
        }}
        color="default"
      />
      <div data-testid="wrapper" className={`${styles.range} ${isChecked ? "" : `${styles.checked}`}`}>
        <span className={styles.costType}>{costType}</span>
        <Box data-testid="box" sx={{ width: 300, display: "flex", alignItems: "center" }} marginLeft="20px">
          <Slider
            data-testid="slider"
            sx={{ color: "black" }}
            disabled={!isChecked}
            getAriaLabel={() => "cost-range"}
            value={value}
            onChange={() => {}}
            onChangeCommitted={handleChange}
            valueLabelDisplay="auto"
            min={range[0]}
            max={range[1]}
          />
        </Box>
      </div>
    </div>
  );
};
