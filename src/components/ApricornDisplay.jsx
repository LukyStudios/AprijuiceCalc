import {
  Card,
  Typography,
  Grid,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

export default function ApricornDisplay({ selectedApricorn, ...props }) {
  console.log(selectedApricorn);

  // TODO: Add Image of Berry
  // TODO: Color each stat
  return (
    selectedApricorn && <Card>
      <CardContent>
        <Typography variant="h2">{selectedApricorn.name} Apricorn</Typography>
        <Grid container spacing={1}>
          {GridRow("Acceleration", selectedApricorn.acceleration)}
          {GridRow("Skill", selectedApricorn.skill)}
          {GridRow("Speed", selectedApricorn.speed)}
          {GridRow("Jump", selectedApricorn.jump)}
          {GridRow("Stamina", selectedApricorn.stamina)}
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
