import {Box, Typography, Divider} from "@mui/material"

export default function GridRow(left, right, ...props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
        color: "text.secondary",
        p: 1,
        justifyContent: "space-between"
      }}
      props = {props}
    >
      <Typography>{left}</Typography>
      <Typography>{right}</Typography>
    </Box>
  );
}