import {
  Card,
  Typography,
  Grid,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

export default function BerryDisplay({ selectedBerry, ...props }) {
  console.log(selectedBerry);

  // TODO: Add Image of Berry
  // TODO: Color each stat
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{selectedBerry.name} Berry</Typography>
        <Grid container spacing={1}>
          {GridRow("Acceleration", selectedBerry.acceleration)}
          {GridRow("Skill", selectedBerry.skill)}
          {GridRow("Speed", selectedBerry.speed)}
          {GridRow("Stamina", selectedBerry.stamina)}
          {GridRow("Jump", selectedBerry.jump)}
        </Grid>
      </CardContent>
    </Card>
  );
}

function GridRow(left, right) {
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
        p:1
      }}
    >
      <Typography>{left}</Typography>
      <Divider orientation="vertical" sx={{m:1}}/>
      <Typography>{right}</Typography>
    </Box>
  );
}
