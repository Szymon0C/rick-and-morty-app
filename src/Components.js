import React, { useState, useContext } from "react";

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

import { MyThemeContext } from "./contexts/MyThemeContext";

const theme = createTheme({
  palette: {
    primary: { main: "#ffeb3b" },
  },
});

export default function Components() {
  const { myTheme, changeMyTheme } = useContext(MyThemeContext);

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
            control={<S.StyledSwitch defaultChecked onChange={changeMyTheme} />}
            label={myTheme}
          />
        </FormGroup>
      </Box>
    </>
  );
}
