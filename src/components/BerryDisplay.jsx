import {
  Card,
  Typography,
  Stack,
  CardContent,
} from "@mui/material";

import GridRow from "./GridRow";

export default function BerryDisplay({ selectedBerry, ...props }) {
  console.log(selectedBerry);

  // TODO: Color each stat
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{selectedBerry.name} Berry</Typography>
        <img
          src={"../public/images/berries/" + selectedBerry.name + "_Berry.png"}
          alt={selectedBerry.name + " Berry"}
          width="64"
          height="64" />
        <Stack container spacing={1}>
          {GridRow("Spicy", selectedBerry.spicy)}
          {GridRow("Dry", selectedBerry.dry)}
          {GridRow("Sweet", selectedBerry.sweet)}
          {GridRow("Bitter", selectedBerry.bitter)}
          {GridRow("Sour", selectedBerry.sour)}
        </Stack>
      </CardContent>
    </Card>
  );
}
