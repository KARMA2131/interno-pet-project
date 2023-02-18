import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ButtonInt from "../../components/ButtonInt";

import img404 from "./faq-img.jpg";

const ErrorPage = () => {
  return (
    <Grid container sx={{ m: "2rem 0" }}>
      <Grid xs={12} sm={12} md={6} lg={6}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: { xs: "6rem", sm: "8rem", md: "10rem", lg: "12rem" },
            color: "#CDA274",
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" },
            fontFamily: "DM Serif Display",
          }}
        >
          We are sorry, but the page you requested was not found
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
            },
            mt: "2rem",
          }}
        >
          <NavLink to="/" style={{textDecoration:'none', }}>
            <ButtonInt contents="Back to Home" arrow />
          </NavLink>
        </Box>
      </Grid>

      <Grid
        xs={0}
        sm={0}
        md={6}
        lg={6}
        sx={{ display: { xs: "none", sm: "none", md: "inline", lg: "inline" } }}
      >
        <img
          src={img404}
          alt="404"
          style={{
            width: "100%",
            borderRadius: "0 0 0 10rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
