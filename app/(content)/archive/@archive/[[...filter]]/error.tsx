"use client";

import { NextPage } from "next/types";

import Error from "@/components/error/error";

const FilterErrorPage: NextPage = () => {
  return <Error title="An Error occurred!" description="Wrong period have chosen." />;
};

export default FilterErrorPage;
