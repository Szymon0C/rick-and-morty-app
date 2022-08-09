import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material";

import * as S from "./style";
const theme = createTheme({
  palette: {
    primary: { main: "#ffeb3b" },
  },
});
export default function Components() {
  const [label, setLabel] = React.useState("Light");
  const changeTheme = () => {
    if (label === "Light") {
      setLabel("Dark");
    } else {
      setLabel("Light");
    }
  };
  return (
    <>
      <Box width={300}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color="primary">
              Yellow
            </Button>
          </ThemeProvider>
        </Stack>
        <Slider
          defaultValue={100}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={200}
        />{" "}
        <FormGroup>
          <FormControlLabel
            control={<S.StyledSwitch defaultChecked onChange={changeTheme} />}
            label={label}
          />
        </FormGroup>
      </Box>
    </>
  );
}
