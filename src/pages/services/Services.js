import { Box, Grid, Typography } from "@mui/material";

import PagesHeader from "../pagesHeader/PagesHeader";
import Works from "../../components/Works";
import ContactFooter from "../../components/contactFooter/ContactFooter";

import "../style.css";

import img1 from "./img/how-we-work-01.svg";
import img2 from "./img/how-we-work-02.svg";
import img3 from "./img/how-we-work-03.svg";
import img4 from "./img/how-we-work-04.svg";

import icon1 from "./img/icon-how-we-work-01.svg";
import icon2 from "./img/icon-how-we-work-02.svg";
import icon3 from "./img/icon-how-we-work-03.svg";
import icon4 from "./img/icon-how-we-work-04.svg";

const Services = () => {
  const workData = [
    {
      title: "Project Plan",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority",
    },
    {
      title: "Interior Work",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
    {
      title: "Realization",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
    {
      title: "Project Plan",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority",
    },
    {
      title: "Interior Work",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
    {
      title: "Realization",
      content:
        "There are many variations of the passages of lorem ipsum from available, majority.",
    },
  ];

  const howWeWorkData = [
    {
      img: img2,
      icon: icon1,
      number: "01",
      title: "Concept & Details",
      contetn:
        "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry. ",
      side: "left",
    },
    {
      img: img3,
      icon: icon2,
      number: "02",
      title: "Idea for Work",
      contetn:
        "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry. ",
      side: "right",
    },
    {
      img: img1,
      icon: icon3,
      number: "03",
      title: "Design",
      contetn:
        "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry. ",
      side: "left",
    },
    {
      img: img4,
      icon: icon4,
      number: "04",
      title: "Perfection",
      contetn:
        "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry. ",
      side: "right",
    },
  ];

  return (
    <Grid container>
      <PagesHeader
        classname="main-services-grid"
        title="Service"
        signature="Home / Services"
      ></PagesHeader>

      <Works dataArray={workData} />

      <Grid
        container
        sx={{
          p: "0 4rem",
          bgcolor: "#F4F0EC",
          borderRadius: "2rem",
          m: "4rem 0",
        }}
      >
        <Grid xs={12} sx={{ mt: "2rem" }}>
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
              textAlign: "center",
            }}
          >
            How We Work
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
              textAlign: "center",
              mb: "2rem",
            }}
          >
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>
        </Grid>

        {howWeWorkData.map((item) => {
          return item.side === "left" ? (
            <Grid container sx={{ mb: "3rem" }}>
              <Grid
                xs={6}
                sx={{
                  p: "2rem",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "inline",
                    lg: "inline",
                  },
                }}
              >
                <img src={item.img} alt={item.title} />
              </Grid>

              <Grid
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ p: { xs: "0rem", sm: "2rem", md: "2rem", lg: "2rem" } }}
              >
                <Box
                  sx={{
                    justifyContent: "space-between",
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                  }}
                >
                  <img
                    src={item.icon}
                    alt="itemIcon"
                    style={{ width: "5rem", display: "flex" }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "DM Serif Display",
                      fontSize: "5rem",
                      color: "white",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    fontSize: "1.5rem",
                    // mt: "1rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.8rem",
                      md: "1.3rem",
                      lg: "1.3rem",
                    },
                    mt: "0.5rem",
                  }}
                >
                  {item.contetn}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid container sx={{ mb: "3rem" }}>
              <Grid
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{ p: { xs: "0rem", sm: "2rem", md: "2rem", lg: "2rem" } }}
              >
                <Box
                  sx={{
                    justifyContent: "space-between",
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                  }}
                >
                  <img
                    src={item.icon}
                    alt="itemIcon"
                    style={{ width: "5rem", display: "flex" }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "DM Serif Display",
                      fontSize: "5rem",
                      color: "white",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    fontSize: "1.5rem",
                    // mt: "1rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.8rem",
                      md: "1.3rem",
                      lg: "1.3rem",
                    },
                    mt: "0.5rem",
                  }}
                >
                  {item.contetn}
                </Typography>
              </Grid>
              <Grid
                xs={6}
                lg={6}
                sx={{
                  p: "2rem",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "inline",
                    lg: "inline",
                  },
                }}
              >
                <img src={item.img} alt={item.title} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <ContactFooter />
    </Grid>
  );
};

export default Services;
