import React, { useState } from "react";
import {
  Stack,
  Button,
  Box,
  Slider,
  FormGroup,
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import * as S from "./style";
const theme = createTheme({
  palette: {
    primary: { main: "#ffeb3b" },
  },
});
export default function Components() {
  const [label, setLabel] = useState("Light");
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
