import * as React from "react";

import { styled, alpha } from "@mui/material/styles";
import { Button, Box, Menu, MenuItem } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";

const menuArr = ["Home", "Pages", "Services", "Project", "Blog", "Contact"];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "#1e3231" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const CollapseMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        sx={{
          color: "black",
          fontSize: "1rem",
          display: { xs: "inline", sm: "inline", md: "none", lg: "none" },
        }}
      >
        <MenuRoundedIcon sx={{ mt: "0.5rem", color: "black" }} />
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          display: { xs: "inline", sm: "inline", md: "none", lg: "none" },
        }}
      >
        {menuArr.map((item) => {
          return (
            <NavLink
              to={`/${item}`}
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Jost",
              }}
            >
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{ fontFamily: "Jost" }}
              >
                {item}
              </MenuItem>
            </NavLink>
          );
        })}
      </StyledMenu>
    </Box>
  );
};

export default CollapseMenu;
