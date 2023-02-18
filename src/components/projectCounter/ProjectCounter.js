import { Grid, Typography, Box } from "@mui/material";

const ProjectCounter = () => {
  const counterData = [
    { title: "12", content: "Years Of Experiance", divider: true },
    { title: "85", content: "Success Project", divider: true },
    { title: "15", content: "Active Project", divider: true },
    { title: "95", content: "Happy Customers" },
  ];

  return (
    <Grid
      container
      sx={{
        bgcolor: "#F4F0EC",
        p: "3rem 0 5rem",
        display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
      }}
    >
      {counterData.map((item) => {
        return (
          <Grid
            xs={6}
            sm={6}
            md={3}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: "2rem",
                  fontFamily: "DM Serif Display",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2rem",
                    lg: "3rem",
                  },
                  color: "#CDA274",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontFamily: "Jost", fontSize: "1.1rem" }}>
                {item.content}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectCounter;
