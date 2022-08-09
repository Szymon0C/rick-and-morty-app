import * as React from "react";
import Paragraph from "./Paragraph";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DialogComponent() {
  const [accept, setAccept] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [technology, setTechnology] = React.useState("");
  const [level, setLevel] = React.useState("");
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
                <option value={"HTML"}>HTML</option>
                <option value={"Css"}>Css</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"React"}>React</option>
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
                <MenuItem value={"Junior"}>Junior</MenuItem>
                <MenuItem value={"Mid"}>Mid</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
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
        <Paragraph content={`Technology:${technology}, level:${level}`} />
      )}
    </div>
  );
}
