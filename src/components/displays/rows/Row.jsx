import { Box } from "@mui/material"

export default function Row({ children, ...props }) {
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
        padding: 1,
        justifyContent: "space-between",
      }}
      props={props}
    >
      {children}
    </Box>
  );
}