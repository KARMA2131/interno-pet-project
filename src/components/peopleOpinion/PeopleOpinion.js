import { Box, Grid, Typography } from "@mui/material";

import img3 from "./img/people-img.svg";
import img2 from "./img/people-img-02.svg";
import img1 from "./img/people-img-03.svg";

const PeopleOpinion = () => {
  const peopleData = [
    {
      avatar: img1,
      name: "Nattasha Mith",
      location: "Sydney, USA",
      comment:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      avatar: img2,
      name: "Raymond Galario",
      location: "Sydney, Australia",
      comment:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      avatar: img3,
      name: "Benny Roll",
      location: "Sydney, New York",
      comment:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
  ];

  return (
    <Grid
      container
      sx={{
        bgcolor: "#F4F0EC",
        p: "1rem",
        pb: "3rem",
        borderRadius: "1.5rem",
        mt: "3rem",
      }}
    >
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            m: "2rem 0",
          }}
        >
          What the People Thinks <br /> About Us
        </Typography>
      </Grid>

      {peopleData.map((item) => {
        return (
          <Grid
            xs={12}
            sm={12}
            md={3.7}
            lg={3.8}
            sx={{
              bgcolor: "#ffff",
              p: "1rem",
              ml: { xs: "0rem", sm: "0rem", md: "1rem", lg: "1rem" },
              borderRadius: "1rem",
              mt: "0.5rem",
            }}
          >
            <Box sx={{ display: "flex", mb: "1rem" }}>
              <img
                src={item.avatar}
                alt={item.index}
                style={{ width: "3rem", margin: "0 1rem 0 0 " }}
              />
              <Box>
                <Typography sx={{ fontFamily: "DM Serif Display" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontFamily: "Jost" }}>
                  {item.location}
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ fontFamily: "Jost" }}>{item.comment}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PeopleOpinion;
