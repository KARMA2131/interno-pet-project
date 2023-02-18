import { Grid, Typography } from "@mui/material";

const PagesHeader = ({ title, signature, classname }) => {
  return (
    <Grid container sx={{ mt: "2rem" }} className={classname}>
      <Grid
        xs={12}
        sx={{ mt: { xs: "8rem", sm: "8rem", md: "6rem", lg: "5rem" } }}
      ></Grid>

      <Grid xs={2} sm={4} md={4} lg={4}></Grid>
      <Grid
        xs={8}
        sm={4}
        md={4}
        lg={4}
        sx={{ bgcolor: "white", borderRadius: "2rem 2rem 0 0", pt: "1rem" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Jost",
            fontSize: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
          }}
        >
          {signature}
        </Typography>
      </Grid>
      <Grid xs={2} sm={4} md={4} lg={4}></Grid>
    </Grid>
  );
};

export default PagesHeader;
