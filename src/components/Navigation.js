import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
// assets
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";

// @material ui
import List from "@material-ui/core/List";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../styles";

// internal
import MenuItem from "./MenuItem";
import routes from "../routes";
import clsx from "clsx";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (matches) {
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" component="h1" variant="h6">
            Quality
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        variant={matches ? "temporary" : "permanent"}
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={open ? Logo1 : Logo2}
            alt="Quality Logo"
          />
        </div>
        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
