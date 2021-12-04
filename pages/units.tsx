import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Table } from "@/components/table";

import rawData from "@/data/units.json";
import { Cost, IUnit, IUnitCommon } from "@/typing/Unit";

const units = rawData.units as IUnit[];

const Units: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <Table data={units} />
    </>
  );
};
export default Units;
