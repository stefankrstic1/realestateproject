import { AppBar, Box, useThemeProps } from "@mui/material";
import React, { Fragment } from "react";
import TopBar from "../Navigation/TopBar";
import BottomNav from "../Navigation/BottomNav";

function Layout(props) {
  return (
    <Fragment>
      <TopBar></TopBar>
      {props.children}
      <Box sx={{display: {sm: 'none'}}}>
        <BottomNav></BottomNav>
      </Box>
    </Fragment>
  );
}

export default Layout;
