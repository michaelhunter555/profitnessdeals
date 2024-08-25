"use client";
import React from "react";

import CardMedia from "@mui/material/CardMedia/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import StyledNextLink from "../Shared/Links/StyledNextLink";
import { categoriesList } from "./CategoriesList";
import { StyledGrid } from "./CategoriesStyles";

const CategoryCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledGrid
      container
      maxWidth={isMobile ? "100%" : "70%"}
      margin="0 auto"
      spacing={2}
    >
      {categoriesList.map((category, i) => (
        <Grid item key={`${category.category}--${i}`}>
          <Paper sx={{ padding: 2 }}>
            <Stack>
              <StyledNextLink route={category.link}>
                <CardMedia
                  component="img"
                  src=""
                  alt=""
                  sx={{ width: "100%", height: "100%" }}
                />

                <Typography color="text.secondary" variant="subtitle2">
                  {category.category}
                </Typography>
                <Divider />
                <Typography color="text.secondary" variant="subtitle2">
                  {category.description}
                </Typography>
              </StyledNextLink>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </StyledGrid>
  );
};
export default CategoryCards;
