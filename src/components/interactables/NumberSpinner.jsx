import { IconButton, Typography, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

export default function NumberSpinner({
  addBerry,
  removeBerry,
  berry,
  min,
  max,
  ...props
}) {
  const [value, setValue] = useState(0);

  function increase() {
    if (addBerry(berry)) {
      setValue(Math.min(max, value + 1));
    }
  }

  function decrease() {
    if (removeBerry(berry)) {
      setValue(Math.max(min, value - 1));
    }
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconButton size="small" onClick={decrease} disabled={value == min} variant="contained">
        <RemoveIcon />
      </IconButton>
      <Typography>{value}</Typography>
      <IconButton size="small" onClick={increase} disabled={value == max} variant="contained">
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
