import { Grid, Typography } from "@mui/material";
import ButtonInt from "../ButtonInt";

const ContactFooter = () => {
  return (
    <Grid
      container
      sx={{ bgcolor: "#292F36", borderRadius: "2rem", p: "3rem 0", mb: "8rem" }}
    >
      <Grid xs={12}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "3rem" },
            textAlign: "center",
            color: "white",
            mb: "1rem",
          }}
        >
          Wanna join the interno?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Jost",
            color: "white",
          }}
        >
          It is a long established fact will be distracted.
        </Typography>
      </Grid>

      <Grid xs={2}></Grid>

      <Grid
        xs={8}
        sx={{ display: "flex", justifyContent: "center", m: "1.5rem 0" }}
      >
        <ButtonInt
          contents="Contact With Us"
          arrowcolor="black"
          bgcolor="#CDA274"
          hoverbgcolor="white"
          arrow
        />
      </Grid>

      <Grid xs={2}></Grid>
    </Grid>
  );
};

export default ContactFooter;
