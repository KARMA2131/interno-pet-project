import ButtonInt from "../ButtonInt";

import { Box, Grid, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import img from "./img/about-us-img.svg";

const AboutUs = () => {
  return (
    <Grid container sx={{ mt: "3rem" }}>
      <Grid xs={12} sm={12} md={6} lg={6} sx={{ p: "1rem 3rem 2rem 1rem" }}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            mb: { xs: "1rem", sm: "1rem", md: "1rem", lg: "3rem" },
          }}
        >
          We Create The Art <br /> Of Stylish Living Stylishly
        </Typography>
        <Typography
          sx={{
            fontFamily: "Jost",
            fontSize: "1.1rem",
            mb: { xs: "1rem", sm: "1rem", md: "1rem", lg: "3rem" },
          }}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </Typography>

        <Box
          sx={{
            display: "flex",
            mb: { xs: "1rem", sm: "1rem", md: "1rem", lg: "3rem" },
          }}
        >
          <LocalPhoneOutlinedIcon
            sx={{
              color: "#CDA274",
              bgcolor: "#F4F0EC",
              p: "1rem",
              borderRadius: "3rem",
              fontSize: "3rem",
            }}
          />
          <Typography sx={{ fontFamily: "Jost", m: "1rem 1rem 1.5rem 2rem" }}>
            <b style={{ fontSize: "1.3rem" }}>12345678</b> <br />
            Call Us Anytime
          </Typography>
        </Box>
        <ButtonInt contents="Get Free Estimate" arrow />
      </Grid>

      <Grid
        md={6}
        lg={6}
        sx={{ display: { xs: "none", sm: "none", md: "inline" } }}
      >
        <img src={img} alt="img" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
