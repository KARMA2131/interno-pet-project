import { Grid, Typography, Box } from "@mui/material";
import ClientLogo from "../../components/clientLogo/ClientLogo";
import PagesHeader from "../pagesHeader/PagesHeader";

import interiorVideo from "../../components/video/interior-video.mp4";
import titleImg from "./img/living-area(4).jpg";
import "../style.css";
import ProjeCounter from "../../components/projectCounter/ProjectCounter";

const points = [
  "1 We provide high quality design services.",
  "2 Project on time and Latest Design.",
  "3 Scientific Skills For getting a better result.",
  "4 Renovations Benefit of Service.",
  "5 We are confident about our projects.",
];

const ServicesSingle = () => {
  const typographyStyle = {
    fontFamily: " Jost",
    m: "2rem 0",
  };

  return (
    <Grid container>
      <PagesHeader
        classname="main-services-grid"
        title="Service Single"
        signature="Home / Services"
      ></PagesHeader>

      <Grid container sx={{ m: "4rem 0" }}>
        <Grid xs={12} sm={12} md={6} lg={5} sx={{ p: " 0 4rem 0 0" }}>
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
            }}
          >
            We set the trends of modern living Services.
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={7}>
          <Typography sx={{ color: "#CDA274", fontFamily: "Jost", mt: "2rem" }}>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page
          </Typography>
          <Typography sx={typographyStyle}>
            When lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </Typography>
          <Typography sx={typographyStyle}>
            When lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </Typography>
        </Grid>
        <ClientLogo />

        <Grid xs={12}>
          <video
            autoPlay
            loop
            muted
            poster="interior"
            src={interiorVideo}
            type="video/mp4"
            style={{ width: "100%", borderRadius: "2rem" }}
          ></video>
        </Grid>

        <Grid container sx={{ mt: "2rem" }}>
          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              p: { xs: "0 2rem", sm: "0 1rem", md: "0 3rem", lg: "0 4rem" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              }}
            >
              Use of Interior
            </Typography>
            <Typography>
              {points.map((item) => {
                return (
                  <Box sx={{ display: "flex", mt: "1rem" }}>
                    <Typography
                      sx={{ color: "#CDA274", fontFamily: "DM Serif Display" }}
                    >
                      {item[0]}
                    </Typography>
                    <Typography sx={{ fontFamily: "Jost", ml: "0.5rem" }}>
                      {item.slice(1)}
                    </Typography>
                  </Box>
                );
              })}
            </Typography>
          </Grid>

          <Grid
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              p: { xs: "2rem 2rem", sm: "0 1rem", md: "0 3rem", lg: "0 4rem" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              }}
            >
              Make An Art
            </Typography>
            <Typography>
              {points.map((item) => {
                return (
                  <Box sx={{ display: "flex", mt: "1rem" }}>
                    <Typography
                      sx={{ color: "#CDA274", fontFamily: "DM Serif Display" }}
                    >
                      {item[0]}
                    </Typography>
                    <Typography sx={{ fontFamily: "Jost", ml: "0.5rem" }}>
                      {item.slice(1)}
                    </Typography>
                  </Box>
                );
              })}
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ m: "4rem 0" }}>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <img
              src={titleImg}
              alt="img"
              style={{ width: "100%", borderRadius: "2rem" }}
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              p: { xs: "0 2rem", sm: "0 2rem", md: "0 3rem", lg: "0 4rem" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              }}
            >
              We love design. That's how we got here.
            </Typography>
            <Typography sx={{ fontFamily: "Jost", fontSize: "1.1rem" }}>
              It is a long established fact that a reader will be distracted by
              the of readable content.
            </Typography>
          </Grid>
        </Grid>

        <ProjeCounter />
      </Grid>
    </Grid>
  );
};

export default ServicesSingle;
// We love design.That's how we got here.

// It is a long established fact that a reader will be distracted by the of readable content .

// Our Portfolio
