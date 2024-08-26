"use client";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  flexWrap: "wrap",
  flexDirection: "row",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "auto",
  gap: 2,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
