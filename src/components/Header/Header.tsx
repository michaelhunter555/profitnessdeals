"use client";

import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

import StyledNextLink from "../Shared/Links/StyledNextLink";
import { StyledBox, StyledContainer } from "./HeaderStyles";
import { MainMenuItems } from "./menuItems";

const logoStyle = {
  width: "250px",
  height: "auto",
  cursor: "pointer",
};

type OpenMenuProps = {
  onMobileMenuClick: () => void;
};

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledContainer isMobile={isMobile}>
      {isMobile && (
        <IconButton>
          <MenuIcon />
        </IconButton>
      )}
      <StyledBox>
        <List sx={{ display: "flex" }}>
          {MainMenuItems.map((menu, i) => (
            <StyledNextLink key={`${menu.component}--${i}`} route={menu.route}>
              <ListItem>
                <ListItemText
                  primary={menu.text}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#b1b1b1",
                    },
                  }}
                />
              </ListItem>
            </StyledNextLink>
          ))}
        </List>
      </StyledBox>
    </StyledContainer>
  );
};

export default Header;
