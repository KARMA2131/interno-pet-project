import { Box, Grid, Link, Typography } from "@mui/material";

import infernoLogo from "./img/logo-inferrno.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { NavLink } from "react-router-dom";

const Footer = () => {
  const pages = [
    "About Us",
    "Our Projects",
    "Our Team",
    "Contact Us",
    "Services",
  ];

  const services = [
    "Kitchen",
    "Living Area",
    "Bathroom",
    "Dinning Hall",
    "Bedroom",
  ];

  const contact = [
    "55 East Birchwood Ave. Brooklyn, New York 11201",
    "contact@interno.com",
    "(123) 456 - 7890",
  ];

  return (
    <Grid container sx={{ mb: "4rem" }}>
      <Grid xs={12} lg={4} sx={{ display: { xs: "flex", lg: "inline" } }}>
        <Grid xs={24} sm={12} md={25} lg={4} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", mt: "0.4rem" }}>
            <NavLink
              to="/Home"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
              }}
            >
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
        </Grid>

        <Grid xs={6} sx={{ display: "flex", mt: "1rem", mb: "2rem" }}>
          <Grid
            xs={10}
            sm={12}
            md={25}
            lg={10}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link href="https://facebook.com" sx={{ color: "black" }}>
              <FacebookIcon />
            </Link>
            <Link href="https://twitter.com" sx={{ color: "black" }}>
              <TwitterIcon />
            </Link>
            <Link href="https://linkedin.com" sx={{ color: "black" }}>
              <LinkedInIcon />
            </Link>
            <Link href="https://instagram.com" sx={{ color: "black" }}>
              <InstagramIcon />
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={4} sm={4} md={4} lg={2.5}>
        <Typography sx={{ fontFamily: "DM Serif Display", cursor: "default" }}>
          Pages
        </Typography>
        {pages.map((item) => {
          return (
            <Grid container>
              <Grid xs={12} sx={{ mt: "0.5rem" }}>
                <Link
                  sx={{
                    fontFamily: "Jost",
                    textDecoration: "none",
                    color: "black",
                  }}
                  href={`#${item}`}
                >
                  {item}
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      <Grid xs={4} sm={4} md={4} lg={2.5}>
        <Typography sx={{ fontFamily: "DM Serif Display", cursor: "default" }}>
          Services
        </Typography>
        {services.map((item) => {
          return (
            <Grid container>
              <Grid xs={12} sx={{ mt: "0.5rem" }}>
                <Link
                  sx={{
                    fontFamily: "Jost",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      <Grid xs={4} sm={4} md={4} lg={2.5}>
        <Typography sx={{ fontFamily: "DM Serif Display", cursor: "default" }}>
          Contact
        </Typography>
        {contact.map((item) => {
          return (
            <Grid container>
              <Grid xs={12} sx={{ mt: "0.5rem" }}>
                <Link
                  sx={{
                    fontFamily: "Jost",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {item}
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Footer;
