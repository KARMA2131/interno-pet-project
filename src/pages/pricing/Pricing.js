import { Box, Grid, Typography } from "@mui/material";
import ButtonInt from "../../components/ButtonInt";
import PagesHeader from "../pagesHeader/PagesHeader";

import "../style.css";

const pricingData = [
  {
    title: "Design advices",
    subtitle:
      "General living space advices Rennovation advices Interior design advices Furniture reorganization Up to 5 hours meetings",
    price: "29",
    buttonColor: "CDA274",
    arrowColor: "292F36",
    mostPopPlan: false,
  },
  {
    title: "Complete interior",
    subtitle:
      "General living space advices Rennovation advices Interior design advices Furniture reorganization Up to 5 hours meetings",
    price: "39",
    buttonColor: "292F36",
    arrowColor: "CDA274",
    priceColor: "CDA274",
    mostPopPlan: true,
  },
  {
    title: "Furniture design",
    subtitle:
      "General living space advices Rennovation advices Interior design advices Furniture reorganization Up to 5 hours meetings",
    price: "59",
    buttonColor: "CDA274",
    arrowColor: "292F36",
    mostPopPlan: false,
  },
];

const Pricing = () => {
  return (
    <Grid container>
      <PagesHeader
        title="Pricing & Plan"
        signature="Home / Pricing"
        classname="main-pricing-grid"
      />

      <Grid container sx={{ m: "4rem 0" }}>
        {pricingData.map((item) => {
          return (
            <Grid
              xs={12}
              sm={12}
              md={3.75}
              lg={3.75}
              sx={{
                p: "1rem 2rem",
                m: "1rem 0.5rem",
                borderRadius: "2rem",
                bgcolor: "#E6E6E6",
              }}
            >
              <Typography
                sx={{ fontFamily: "DM Serif Display", textAlign: "center" }}
              >
                {item.title}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography
                    sx={{ fontFamily: "DM Serif Display", mb: "1rem" }}
                  >
                    $
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontFamily: "DM Serif Display",
                      color: `#${item.priceColor}`,
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontFamily: "DM Serif Display",
                  textAlign: "center",
                  mb: "3rem",
                }}
              >
                /month
              </Typography>

              {item.mostPopPlan ? (
                <Typography
                  sx={{
                    bgcolor: "#292F36",
                    color: "white",
                    textAlign: "center",
                    p: "0.2rem",
                    mt: "-2rem",
                    mb: "0.5rem",
                    borderRadius: "1rem",
                  }}
                >
                  Most Mopular Plan
                </Typography>
              ) : null}

              <Typography
                sx={{ fontFamily: "Jost", textAlign: "center", mt: "rem" }}
              >
                {item.subtitle}
              </Typography>

              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "2.5rem" }}
              >
                <ButtonInt
                  contents="Get started"
                  arrow
                  bgcolor={`#${item.buttonColor}`}
                  arrowcolor={`#${item.arrowColor}`}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Pricing;

// General living space advices
// Rennovation advices
// Interior design advices
// Furniture reorganization
// Up to 5 hours meetings

// Complete home redesign
// Interior and exterior works
// Modular interior planning
// Kitchen design
// Garages organization

// Furniture for living room
// Furniture refurbishment
// Sofas and amchairs
// Tables and chairs
// Kitchens
