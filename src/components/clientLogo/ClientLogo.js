import { Grid } from "@mui/material";

import logo1 from "./img/logos_01.svg";
import logo2 from "./img/logos-02.svg";
import logo3 from "./img/logos-03.svg";
import logo4 from "./img/logos-04.svg";
import logo5 from "./img/logos-05.svg";

const ClientLogo = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <Grid container sx={{ m: "5rem 0" }}>
      {logos.map((item) => {
        return (
          <Grid xs={2.4}>
            <img src={item} alt={item.index} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ClientLogo;
