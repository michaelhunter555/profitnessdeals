"use client";

import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
      <Grid item>
        <Typography color="text.secondary" fontWeight={800}>
          ProFitnessDeals.com
        </Typography>
      </Grid>

      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
};

export default MainNavigation;
