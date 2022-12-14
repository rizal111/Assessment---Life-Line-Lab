import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ButtonMini = styled(Button)({
  fontSize: "0.7rem",
  paddingTop: 3,
  paddingBottom: 3,
  "MuiButton-root ": {
    padding: 2,
    paddingLeft: 4,
    fontSize: "0.8rem",
  },
});

export default ButtonMini;
