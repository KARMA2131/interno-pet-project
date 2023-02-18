import { Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ButtonInt from "../../components/ButtonInt";
import PagesHeader from "../pagesHeader/PagesHeader";

import "../style.css";

const pagesData = [
  { title: "Home", to: "/Home" },
  { title: "Pages", to: "/Pages" },
  { title: "Services", to: "/Services" },
  { title: "Projects", to: "/Project" },
  { title: "Blog And News", to: "/Blog" },
  { title: "About Us", to: "/AboutUs" },
  { title: "Contact Us", to: "/Contact" },
  { title: "Pricing & Plans", to: "/Pricing" },
  { title: "Faq", to: "/Faqs" },
  { title: "404 Error Page", to: "/Errorpage" },
  { title: "Restricted Page", to: "/RestrictedPage" },
];
const Pages = () => {
  return (
    <Grid container>
      <PagesHeader
        title="Pages"
        signature="All Pages"
        classname="main-services-grid"
      />

      <Grid container sx={{ m: "2rem 0 4rem", p: "0 2rem " }}>
        {pagesData.map((item) => {
          return (
            <Grid
              xs={12}
              sx={{
                p: "0.5rem 3rem",
                mt: "1rem ",
                borderRadius: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "#5544",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Serif Display",
                  display: "flex",
                  mt: "0.4rem",
                }}
              >
                {item.title}
              </Typography>
              <NavLink
                to={`${item.to}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ButtonInt arrow />
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Pages;
