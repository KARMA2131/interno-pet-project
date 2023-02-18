import { Box, List, ListItem, Typography, Link, Button } from "@mui/material";
import CollapseMenu from "./CollapseMenu";
import infernoLogo from "./img/logo-inferno.svg";
import dandruff from "./img/dandruff.svg";

import { NavLink } from "react-router-dom";

const menuArr = ["Home", "Pages", "Services", "Project", "Blog", "Contact"];

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "2rem",
      }}
    >
      <Box sx={{ display: "flex", mt: "0.4rem" }}>
        <NavLink to="/Home" style={{textDecoration:'none', color:'black', display:'flex'}}>
          <img
            src={infernoLogo}
            alt="logo"
            style={{ width: "35px", height: "35px" }}
          />
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: "2rem",
              ml: "0.5rem",
            }}
          >
            Interno
          </Typography>
        </NavLink>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          ml: {
            md: "12rem",
            lg: "30rem",
          },
        }}
      >
        {menuArr.map((item) => {
          return (
            <Box>
              <List>
                <ListItem>
                  <NavLink to={`/${item}`} style={{ textDecoration: "none" }}>
                    <Link
                      sx={{
                        fontFamily: "Jost",
                        color: "black",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Link>
                  </NavLink>
                </ListItem>
              </List>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ display: "flex" }}>
        <CollapseMenu
          sx={{
            display: { xs: "inline", sm: "inline", md: "none", lg: "none" },
          }}
        />
        <Button>
          <img src={dandruff} alt="dandruff" style={{ width: "1rem" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
