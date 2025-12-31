import {
  Card,
  Typography,
  Stack,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

import GridRow from "./GridRow";

export default function ApricornDisplay({ selectedApricorn, ...props }) {
  console.log(selectedApricorn);

  // TODO: Color each stat
  return (
    selectedApricorn && <Card>
      <CardContent>
        <Typography variant="h2">{selectedApricorn.name} Apricorn</Typography>
        <img
          src={"../public/images/apricorns/" + selectedApricorn.name + "_Apricorn.png"}
          alt={selectedApricorn.name + " Berry"}
          width="64"
          height="64" />
        <Stack container spacing={1}>
          {GridRow("Acceleration", selectedApricorn.acceleration)}
          {GridRow("Skill", selectedApricorn.skill)}
          {GridRow("Speed", selectedApricorn.speed)}
          {GridRow("Jump", selectedApricorn.jump)}
          {GridRow("Stamina", selectedApricorn.stamina)}
        </Stack>
      </CardContent>
    </Card>
  );
}
