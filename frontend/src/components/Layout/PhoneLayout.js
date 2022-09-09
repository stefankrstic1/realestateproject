import React, { Fragment } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Paper from "@mui/material/Paper";
import ToolBar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import logo from "../assets/radnilogo.png";

import classes from "./PhoneLayout.module.css";
import { textAlign } from "@mui/system";

function PhoneLayout(props) {
  return (
    <Fragment>
      <Box>
        <AppBar position="sticky">
          <ToolBar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Box
              elevation={0}
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img src={logo} alt="logo" className={classes.img} />
            </Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="login"
            >
              <LoginIcon />
            </IconButton>
          </ToolBar>
        </AppBar>
      </Box>
      {props.children}
    </Fragment>
  );
}

export default PhoneLayout;
