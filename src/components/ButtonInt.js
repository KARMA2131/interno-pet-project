import { Button } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const ButtonInt = ({
  contents,
  arrow,
  bgcolor = "#292F36",
  hovercolor = "black",
  hoverbgcolor = "white",
  linkcolor = "white",
  arrowcolor = "#CDA274",
}) => {
  const style = {
    textTransform: "none",
    fontSize: "1rem",
    p: {
      xs: "0.7rem 0.5rem",
      sm: "0.7rem 1rem",
      md: "0.7rem 1rem",
      lg: "1rem 2.5rem",
    },
    bgcolor: `${bgcolor}`,
    color: `${linkcolor}`,
    borderRadius: "1rem",
    fontFamily: "Jost",

    "&:hover": {
      bgcolor: `${hoverbgcolor}`,
      color: `${hovercolor}`,
    },
  };

  return (
    <Button sx={style}>
      {contents}
      {arrow === true ? (
        <EastRoundedIcon
          sx={{
            fontSize: { xs: "small" },
            color: `${arrowcolor}`,
            ml: "0.4rem",
          }}
        />
      ) : null}
    </Button>
  );
};

export default ButtonInt;
