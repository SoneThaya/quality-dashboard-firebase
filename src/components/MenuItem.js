import React from "react";

// @material ui
import { ListItem, ListItemIcon, ListItemText, Icon } from "@material-ui/core";

// internal
import { useStyles } from "../styles";

// external
import clsx from "clsx";

const MenuItem = ({ label, icon, activeIcon, path }) => {
  const classes = useStyles();
  const [active, setActive] = React.useState(true);

  return (
    <ListItem
      className={clsx(classes.menuItem, active && classes.menuItemActive)}
    >
      <ListItemIcon>
        <Icon>
          <img
            className={classes.menuItemIcon}
            src={active ? activeIcon : icon}
            alt={label}
          />
        </Icon>
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  );
};

export default MenuItem;
