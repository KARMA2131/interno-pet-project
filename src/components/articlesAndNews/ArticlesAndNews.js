import { Box, Grid, Link, Typography } from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import newsImg1 from "./img/news-img-01.svg";
import newsImg2 from "./img/news-img-02.svg";
import newsImg3 from "./img/news-img-03.svg";

const ArticlesAndNews = () => {
  const tagButtonStyle = {
    position: "absolute",
    color: "black",
    fontFamily: "Jost",
    textDecoration: "none",
    bgcolor: "white",
    p: "0.5rem",
    borderRadius: "0.7rem 0.7rem 0.7rem 0",
    ml: "1rem",
    mt: { sm: "25rem", md: "10rem", lg: "15rem" },
    display: { xs: "none", sm: "inline", md: "inline", lg: "inline" },
  };

  const styledGrid = {
    border: "1px solid #F8F4EA",
    borderRadius: "3.5rem",
    p: "1.5rem",

    "&:hover": {
      bgcolor: "#F4F0EC",
      transform: "scale(1.01)",
    },
  };

  const styledLink = {
    width: "1.5rem",
    color: "black",
    bgcolor: "#F4F0EC",
    p: "1rem",
    borderRadius: "2rem",

    "&:hover": {
      color: "white",
      bgcolor: "#292F36",
    },
  };

  const newsData = [
    {
      img: newsImg1,
      title: "Let’s Get Solution For Building Construction Work",
      tag: "Kitchan Design",
      date: "15 December, 2022 ",
    },
    {
      img: newsImg2,
      title: "Low Cost Latest Invented Interior Designing",
      tag: "Living Design",
      date: "26 December, 2022 ",
    },
    {
      img: newsImg3,
      title: "Best For Any Office & Business Interior Solution",
      tag: "Interior Design",
      date: "25 December, 2022 ",
    },
  ];

  return (
    <Grid container sx={{ m: " 4rem 0" }}>
      <Grid xs={12} sx={{ mb: " 4rem" }}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            textAlign: "center",
          }}
        >
          Articles & News
        </Typography>
        <Typography sx={{ fontFamily: "Jost", textAlign: "center" }}>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </Typography>
      </Grid>

      {newsData.map((item) => {
        return (
          <Grid xs={12} sm={12} md={4} lg={4} sx={{ p: "1rem" }}>
            <Box sx={styledGrid}>
              <Link sx={tagButtonStyle} href="/#">
                {item.tag}
              </Link>
              <img
                src={item.img}
                alt={item.index}
                style={{ borderRadius: "2rem 2rem 0 0", mb: "1rem" }}
              />
              <Typography sx={{ m: "2rem 0", fontFamily: "DM Serif Display" }}>
                {item.title}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ fontFamily: "Jost", mt: "1rem" }}>
                    {item.date}
                  </Typography>
                </Box>
                <Link href="/#">
                  <ArrowForwardIosRoundedIcon sx={styledLink} />
                </Link>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesAndNews;
