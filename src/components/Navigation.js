import React from "react";
import Drawer from "@material-ui/core/Drawer";
// assets
import Logo from "../logo.svg";
import DashboardIcon from "../assets/DashboardIcon.svg";
import DashboardIconActive from "../assets/DashboardIconActive.svg";
import AccountsIcon from "../assets/AccountsIcon.svg";
import AccountsIconActive from "../assets/AccountsIconActive.svg";

// @material ui
import { useStyles } from "../styles";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItem";

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        classes={{ paper: classes.navigationDrawer }}
        variant="permanent"
        open={true}
      >
        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={Logo}
            alt="Quality Logo"
          />
        </div>
        <List className={classes.navigationList}>
          <MenuItem
            label="Dashboard"
            icon={DashboardIcon}
            activeIcon={DashboardIconActive}
            path="/"
          />
          <MenuItem
            label="Accounts"
            icon={AccountsIcon}
            activeIcon={AccountsIconActive}
            path="/accounts"
          />
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
