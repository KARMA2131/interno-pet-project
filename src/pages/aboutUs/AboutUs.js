import { Box, Grid, TextField, Typography } from "@mui/material";
import ButtonInt from "../../components/ButtonInt";

import PagesHeader from "../pagesHeader/PagesHeader";

import "../style.css";
import interiorImg1 from "./img/interior-01.svg";
import interiorImg2 from "./img/interior-02.svg";

import peopleImg1 from "./img/people-img-01.svg";
import peopleImg2 from "./img/people-img-02.svg";
import peopleImg3 from "./img/people-img-03.svg";
import peopleImg4 from "./img/people-img-04.svg";

const cardData = [
  {
    name: "Liam Johnson",
    profecionAndCountry: "Design/Australia",
    number: "+ 1 (378) 400-1245",
    email: "liamJonson@gmail.com",
    img: peopleImg1,
  },
  {
    name: "Ava Smith",
    profecionAndCountry: "Design/Australia",
    number: "+ 1 (378) 400-1245",
    email: "avaSmith@gmail.com",
    img: peopleImg2,
  },
  {
    name: "Charlotte Jones",
    profecionAndCountry: "Design/Australia",
    number: "+ 1 (378) 400-1245",
    email: "charlotteJonson@gmail.com",
    img: peopleImg3,
  },
  {
    name: "Oliver Giacometti ",
    profecionAndCountry: "Design/Australia",
    number: "+ 1 (378) 400-1245",
    email: "oliverGiacometti@gmail.com",
    img: peopleImg4,
  },
];

const AboutUs = () => {
  const styledImg = {
    p: "0.5rem",
    borderRadius: "1.5rem",
  };

  return (
    <Grid container>
      <PagesHeader title="About Us" classname="main-about-us-grid" />

      <Grid container sx={{ m: "4rem 0" }}>
        <Grid xs={2} sm={1} md={2} lg={3}></Grid>
        <Grid
          xs={12}
          sm={10}
          md={8}
          lg={6}
          sx={{
            border: "0.5rem solid #5532",
            borderRadius: "2rem",
            p: "1rem 2rem",
            borderTop: "0",
            borderBottom: "0",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Lobster",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              “
            </Typography>
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                textAlign: "center",
                fontStyle: "italic",
                mb: "0.5rem",
              }}
            >
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: "0.7rem",
                textAlign: "center",
              }}
            >
              -BUNNY WILLIAMS
            </Typography>
          </Box>
        </Grid>
        <Grid xs={2} sm={1} md={2} lg={3}></Grid>
      </Grid>

      <Grid container>
        <Grid container>
          <Grid xs={12} sm={12} md={5} lg={5} sx={{ p: "2rem 4rem 0 0" }}>
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              }}
            >
              What We Do
            </Typography>
            <Typography sx={{ fontFamily: "Jost", mb: "3rem" }}>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </Typography>
            <ButtonInt contents="Our Concept" arrow />
          </Grid>
          <Grid
            xs={7}
            sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
          >
            <img
              src={interiorImg1}
              alt="interior"
              style={{ width: "100%", borderRadius: "2rem" }}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ m: "5rem 0" }}>
          <Grid
            xs={7}
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            <img
              src={interiorImg2}
              alt="interior"
              style={{ width: "100%", borderRadius: "2rem" }}
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={5}
            lg={5}
            sx={{ p: { xs: "2rem 0 ", sm: "2rem 0 ", md: "2rem 0 0 2rem " } }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              }}
            >
              The End Result
            </Typography>
            <Typography sx={{ fontFamily: "Jost", mb: "3rem" }}>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </Typography>
            <ButtonInt contents="Our Portfolio" arrow />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          bgcolor: "#F4F0EC",
          p: "3rem 0",
          display: "flex",
          justifyContent: "center",
          mb:'4rem'
        }}
      >
        <Grid xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2rem" },
              m: "1rem 0",
            }}
          >
            What the People Thinks About Us
          </Typography>
        </Grid>

        {cardData.map((item) => {
          return (
            <Grid
              xs={3}
              sm={2.5}
              md={2.5}
              lg={2}
              sx={{
                p: "0.5rem",
                mb: { xs: "0rem", sm: "0rem", md: "0rem", lg: "2rem" },
              }}
            >
              <img src={`${item.img}`} alt="people-img" style={styledImg} />
            </Grid>
          );
        })}
      </Grid>

      <Grid container sx={{ m: "3rem 0" }}>
        <Grid xs={12}>
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
              },
              textAlign: "center",
              mb: "2rem",
            }}
          >
            Creative project? Let's have a productive talk.
          </Typography>
        </Grid>

        <Grid container sx={{p:{xs:'0',sm:'0', md:'0 3rem',lg:'0 3rem'}}}>
          <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 3rem", mb:{xs:'2rem',sm:'0',md:'0',lg:'0'} }}>
            <TextField
              id="standard-multiline-flexible"
              label="Name"
              // multiline
              maxRows={4}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 3rem" }}>
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              // multiline
              maxRows={4}
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid xs={12} sx={{ p: "3rem" }}>
            <Typography sx={{ fontFamily: "Jost" }}>
              Hello I Am Interested in...
            </Typography>
            <TextField
              id="standard-multiline-flexible"
              maxRows={4}
              variant="standard"
              fullWidth
              sx={{ m: "2rem 0" }}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ButtonInt contents="Send Now" arrow />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
