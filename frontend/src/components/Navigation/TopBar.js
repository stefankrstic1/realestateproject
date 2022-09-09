import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "@mui/icons-material/Login";

// PROMENITI SLIKU U NEKI BUDUCI LOGO
import logo from "../../assets/radnilogobezslova.png";

import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <Fragment>
      <Box>
        <AppBar
          position="sticky"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box >
              <img src={logo} alt="logo" className={classes.img} />
            </Box>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              aria-label="login"
              edge="end"
            >
              <LoginButton />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppBar position="sticky" sx={{ display: { xs: "none", sm: "block" } }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ textAlign: "center" }}>
                <img src={logo} alt="logo" className={classes.img} />
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="inherit">
                Postavi oglas
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button variant="text" color="inherit">
                Login
              </Button>
              <Button variant="contained" color="secondary">
                Registracija
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default TopBar;
