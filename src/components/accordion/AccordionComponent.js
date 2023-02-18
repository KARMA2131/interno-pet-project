import { Grid, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ title, content }) => {
  return (
    <Grid container>
      <Accordion sx={{ borderBottom: "3px solid #CDA274" }} square="false">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="content"
          id="header"
        >
          <Typography sx={{ fontFamily: "DM Serif Display" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: "Jost" }}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AccordionComponent;
