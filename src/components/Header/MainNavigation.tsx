"use client";

import React from "react";

import Grid from "@mui/material/Grid";

import Header from "./Header";

const MainNavigation = () => {
  return (
    <Grid
      container
      sx={{
        flexDirection: { xs: "none", md: "row" },
        justifyContent: { xs: "nomral", md: "space-between" },
        alignItems: "center",
        borderBottom: "1px solid #f1f1f1",
      }}
    >
      <Grid item>Logo Goes here</Grid>

      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
};

export default MainNavigation;
