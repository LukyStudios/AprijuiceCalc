import { Button, Typography, Stack } from "@mui/material";
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
      sx={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button onClick={decrease} disabled={value == min}>
        -
      </Button>
      <Typography>{value}</Typography>
      <Button onClick={increase} disabled={value == max}>
        +
      </Button>
    </Stack>
  );
}
