"use client";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 2,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
