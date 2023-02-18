import { Grid, Typography } from "@mui/material";
import AccordionComponent from "../../components/accordion/AccordionComponent";
import PagesHeader from "../pagesHeader/PagesHeader";
import "../style.css";

import faqImg1 from "./img/faq-img-01.svg";
import faqImg2 from "./img/faq-img-02.svg";

const contentFaq =
  "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised.";

const everyQuestionsArr = [
  {
    title: "What is the Hipcouch Interior Design Service?",
  },
  {
    title: "So, how exactly does this work?",
  },
  {
    title: "What cities do you currently operate in?",
  },
  {
    title: "Hipcouch Interior Design Service?",
  },
  {
    title: "What kind of interior designers do you have?",
  },
];

const projectRelatedQuestions = [
  {
    title: "How long does it take?",
  },
  {
    title: "Can I use my existing furnishings?",
  },
  {
    title: "WI put into redesigning my interior?",
  },
  {
    title: "What do your services cost?",
  },
  {
    title: "Do you offer free consultations?",
  },
];

const Faqs = () => {
  return (
    <Grid container>
      <PagesHeader
        title="Faq`s"
        signature="Home / Faq"
        classname="main-faq-grid"
      />

      <Grid container sx={{ m: "2rem 0" }}>
        <Grid xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
              m: "4rem 0 2rem",
            }}
          >
            Every Questions Answered
          </Typography>
        </Grid>

        <Grid xs={0} sm={0} md={6} lg={6}>
          {everyQuestionsArr.map((item) => {
            return (
              <AccordionComponent title={item.title} content={contentFaq} />
            );
          })}
        </Grid>

        <Grid xs={0} sm={0} md={6} lg={6} sx={{ p: " 0 0 0 2rem " }}>
          <img src={faqImg1} alt="faqImg1" style={{ borderRadius: "2rem" }} />
        </Grid>
      </Grid>

      <Grid container sx={{ mb: "2rem" }}>
        <Grid xs={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
              m: "4rem 0 2rem",
            }}
          >
            Project Related Questions
          </Typography>
        </Grid>

        <Grid xs={0} sm={0} md={6} lg={6} sx={{ p: " 0 2rem 0  " }}>
          <img src={faqImg2} alt="faqImg1" style={{ borderRadius: "2rem" }} />
        </Grid>
        <Grid xs={0} sm={0} md={6} lg={6}>
          {projectRelatedQuestions.map((item) => {
            return (
              <AccordionComponent title={item.title} content={contentFaq} />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Faqs;
