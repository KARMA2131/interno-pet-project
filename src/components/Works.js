import { Box, Grid, Typography } from "@mui/material";
import ButtonInt from "./ButtonInt";

const Works = ({ dataArray }) => {
  const styledCard = {
    justifyContent: "center",
    p: "1rem 2rem",
    mt: "2.5rem",

    "&:hover": {
      bgcolor: "#F4F0EC",
      borderRadius: "2rem",
    },
  };
  return (
    <Grid container>
      {dataArray.map((item) => {
        return (
          <Grid xs={12} sm={12} md={4} lg={4} sx={styledCard}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "1rem",
                fontFamily: "DM Serif Display",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "1rem",
                fontFamily: "Jost",
                textAlign: "center",
              }}
            >
              {item.content}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ButtonInt
                contents="Read More"
                linkcolor="black"
                hovercolor="white"
                bgcolor="none"
                hoverbgcolor="#292F36"
                arrow
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Works;
