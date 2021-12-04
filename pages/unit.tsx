import React from "react";
import type { NextPage } from "next";
import { Table } from "@/components/table";
import CssBaseline from "@material-ui/core/CssBaseline";

import { units } from "@/data/units.json";

const Unit: NextPage = () => {
  // tüm sayfada kullanılacak data burda olsun
  // filtreleme componentlerini burda çağırır datayı handle ederiz
  // data yı sonrasında table component ına göndreririz

  const data = [];

  return (
    <>
      <CssBaseline />
      <Table data={data} />
    </>
  );
};
export default Unit;
