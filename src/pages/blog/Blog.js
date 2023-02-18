import { Box, Grid, Typography, Link } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import PagesHeader from "../pagesHeader/PagesHeader";

import postImg1 from "./living-area(2).jpg";

import "../style.css";
import ProjPagination from "./ProjPagination";

const Blog = () => {
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

  return (
    <Box>
      <PagesHeader
        classname="main-blog-grid"
        title="Articles & News"
        signature="Home / Blog"
      />

      <Grid container sx={{ m: "4rem 0" }}>
        <Grid xs={12}>
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
              mb: "2rem",
            }}
          >
            Latest Post
          </Typography>
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={6} sx={{ mb: "2rem" }}>
          <img
            src={postImg1}
            alt="img"
            style={{ borderRadius: "2rem", width: "100%" }}
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ p: { xs: "0", sm: "0", md: "0 2rem", lg: "0 3rem" } }}
        >
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1.5rem" },
              mb: "1rem",
            }}
          >
            Low Cost Latest Invented Interior Designing Ideas
          </Typography>
          <Typography sx={{ fontFamily: "Jost" }}>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
            <br />
            <br />
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: { xs: "2rem", sm: "2rem", md: "1.5rem", lg: "6rem" },
            }}
          >
            <Typography sx={{ fontFamily: "Jost", mt: "3rem" }}>
              26 December,2022{" "}
            </Typography>
            <Link href="/#">
              <ArrowForwardIosRoundedIcon sx={styledLink} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ mb: "2rem" }}>
        <Grid xs={12}>
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
              mb: "2rem",
            }}
          >
            Articles & News
          </Typography>
        </Grid>

        <ProjPagination />
      </Grid>
      <Grid
        container
        sx={{ m: "2rem 0", display: "flex", justifyContent: "center" }}
      ></Grid>
    </Box>
  );
};

export default Blog;
