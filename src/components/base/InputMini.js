import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const InputMini = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    padding: 2,
    paddingLeft: 4,
    fontSize: "0.8rem",
  },
});

export default InputMini;
