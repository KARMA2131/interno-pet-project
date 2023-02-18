import { Grid, Typography } from "@mui/material";
import AboutUs from "../../components/aboutUs/Aboutus";
import ArticlesAndNews from "../../components/articlesAndNews/ArticlesAndNews";
import ButtonInt from "../../components/ButtonInt";
import ClientLogo from "../../components/clientLogo/ClientLogo";
import OurProjects from "../../components/ourProjects/OurProjects";
import PeopleOpinion from "../../components/peopleOpinion/PeopleOpinion";
import ProjectCounter from "../../components/projectCounter/ProjectCounter";
import Work from "../../components/work/Work";
import ContactFooter from "../../components/contactFooter/ContactFooter";

import "./style.css";

const HomePage = () => {
  return (
    <Grid container>
      <Grid
        container
        className="main-grid"
        sx={{
          m: "4rem 0",
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{
            p: {
              xs: "3rem 1rem ",
              sm: "3rem 1rem",
              md: "5rem 2rem",
              lg: "11rem 4rem ",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            }}
          >
            Let You Home <br /> Be Unique
          </Typography>
          <Typography
            sx={{ fontFamily: "Jost", fontSize: "1.1rem", mb: "1rem" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <ButtonInt contents="Get Contact" arrow />
        </Grid>
      </Grid>

      <Work />

      <AboutUs />

      <PeopleOpinion />

      <ClientLogo />

      <OurProjects />

      <ProjectCounter />

      <ArticlesAndNews />

      <ContactFooter />


    </Grid>
  );
};

export default HomePage;
