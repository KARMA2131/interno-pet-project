import { Box, Grid, TextField, Typography } from "@mui/material";
import ButtonInt from "../../components/ButtonInt";
import PagesHeader from "../pagesHeader/PagesHeader";

const RestrictedPage = () => {
  return (
    <Grid container>
      <PagesHeader
        title="Restricted Page"
        signature="Home / Restricted Page"
        classname="main-faq-grid"
      />

      <Grid container sx={{ m: "4rem 0" }}>
        <Grid
          xs={12}
          sx={{ bgcolor: "#5655", p: "4rem 0", borderRadius: "2rem" }}
        >
          <Typography
            sx={{
              fontFamily: "DM Serif Display",
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
            }}
          >
            Password Protected
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: {
                xs: "0.5rem",
                sm: "0.7rem",
                md: "1rem",
                lg: "1.5rem",
              },
              textAlign: "center",
              p:'0 6rem'
            }}
          >
            This page is password protected. If you are the website admin, or
            have access to this page, please type your password below.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", p: "0 8rem", mt:'1rem' }}>
            <TextField
              id="standard-basic"
              label="Enter Your Password"
              variant="standard"
              size="small"
              fullWidth
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
            <ButtonInt contents="Submit Now" arrow />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RestrictedPage;
