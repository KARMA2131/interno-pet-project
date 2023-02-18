import { Grid, TextField, Typography } from "@mui/material";
import ButtonInt from "../../components/ButtonInt";
import PagesHeader from "../pagesHeader/PagesHeader";
import mapImg from "./img/map.svg";

import "../style.css";

const Contact = () => {
  return (
    <Grid container>
      <PagesHeader
        title="Contact Us"
        signature="Home / Contact"
        classname="main-faq-grid"
      />

      <Grid xs={12}>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
            m: "4rem 0 2rem",
          }}
        >
          We love meeting new people <br /> and helping them.
        </Typography>
      </Grid>

      <Grid container>
        <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 1rem 1rem" }}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 1rem" }}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 1rem" }}>
          <TextField
            id="standard-basic"
            label="Subject"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: "0 1rem" }}>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid xs={12} sx={{ p: "0 1rem" }}>
          <Typography sx={{ fontFamily: "Jost", m: "2rem 0 2rem" }}>
            Hello Iam Interested in...
          </Typography>
        </Grid>

        <Grid xs={12} sx={{ p: "0 1rem" }}>
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "end",
            m: "1rem 0",
            p: "1rem 1rem 0 ",
          }}
        >
          <ButtonInt contents="Send Now" arrow />
        </Grid>
        <Grid xs={12} sx={{ m: "4rem 0" }}>
          <img
            src={mapImg}
            alt="map"
            style={{ width: "100%", borderRadius: "2rem" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
