import React, { useState, useContext } from "react";

import Paragraph from "./Paragraph";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import { SloganContext } from "./contexts/SloganContext";

export default function DialogComponent() {
  const [accept, setAccept] = useState(false);
  const [open, setOpen] = useState(false);
  const [technology, setTechnology] = useState("");
  const [level, setLevel] = useState("");
  const LEVELS = ["Junior", "Mid", "Senior"];
  const TECHNOLOGY = ["HTML", "Css", "JavaScript", "React"];

  const { slogan } = useContext(SloganContext);

  const handleChangeTechnology = (event) => {
    setTechnology(String(event.target.value) || "");
  };
  const handleChangeLevel = (event) => {
    setLevel(String(event.target.value) || "");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    setAccept(false);
  };
  const handleCloseOk = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    setAccept(true);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Choose technology</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose technology</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Technology</InputLabel>
              <Select
                native
                value={technology}
                onChange={handleChangeTechnology}
                input={
                  <OutlinedInput label="Technology" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                {TECHNOLOGY.map((technology) => {
                  return <option value={technology}>{technology}</option>;
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Level</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={level}
                onChange={handleChangeLevel}
                input={<OutlinedInput label="Level" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {LEVELS.map((level) => {
                  return <MenuItem value={level}>{level}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseOk}>Ok</Button>
        </DialogActions>
      </Dialog>
      {technology && level && accept && (
        <Paragraph
          content={`Technology:${technology}, level:${level} \n ${slogan}`}
        />
      )}
    </div>
  );
}
