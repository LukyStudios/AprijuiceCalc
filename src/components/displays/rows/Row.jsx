import { Box } from "@mui/material";
import paletteFromFlavor from "../../FlavorPalette";

export default function Row({ flavor, children, ...props }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid",
        borderRadius: 2,
        padding: 1,
        justifyContent: "space-between",
        ...paletteFromFlavor(flavor),
      }}
      props={props}
    >
      {children}
    </Box>
  );
}
