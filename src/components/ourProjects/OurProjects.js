import { Grid, Typography, Box, Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import proj1 from "./img/proj-img-01.svg";
import proj2 from "./img/proj-img-02.svg";
import proj3 from "./img/proj-img-03.svg";
import proj4 from "./img/proj-img-04.svg";

const OurProjects = () => {
  const projData = [proj1, proj2, proj3, proj4];

  const styledLink = {
    width: "1.5rem",
    color: "black",
    bgcolor: "#F4F0EC",
    p: "1rem",
    mt: "1.5rem",
    borderRadius: "2rem",

    "&:hover": {
      color: "white",
      bgcolor: "#292F36",
    },
  };

  return (
    <Grid container sx={{ m: "4rem 0" }}>
      <Grid xs={12}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            textAlign: "center",
          }}
        >
          Follow Our Projects
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontFamily: "Jost", mb: "1rem" }}
        >
          It is a long established fact that a reader will be distracted by the
          of readable <br /> content of page lookings at its layouts points.
        </Typography>
      </Grid>

      {projData.map((item) => {
        return (
          <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "2rem" }}>
            <img src={item} alt={item} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    mt: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Modern Khitchen
                </Typography>
                <Typography sx={{ fontFamily: "Jost" }}>
                  Decor / Architecture
                </Typography>
              </Box>

              <Link href="/#">
                <ArrowForwardIosRoundedIcon sx={styledLink} />
              </Link>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OurProjects;
