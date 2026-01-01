import { Card, Typography, Stack, CardContent } from "@mui/material";

import Row from "../rows/Row";
import DuoTypography from "../rows/DuoTypography";

export default function BerryDisplay({ selectedBerry, ...props }) {
  // console.log(selectedBerry);

  // TODO: Color each stat
  return (
    <Card sx={{ minWidth: 120, width: "30%" }}>
      <CardContent>
        <div align="center">
          <img
            src={"./images/berries/" + selectedBerry.name + "_Berry.png"}
            alt={selectedBerry.name + " Berry"}
            width="64"
            height="64"
          />
          <Typography variant="h5">{selectedBerry.name} Berry</Typography>
        </div>
        <br />
        <Stack container spacing={1}>
          <Row flavor="Spicy">{DuoTypography("Spicy", selectedBerry.spicy)}</Row>
          <Row flavor="Dry">{DuoTypography("Dry", selectedBerry.dry)}</Row>
          <Row flavor="Sweet">{DuoTypography("Sweet", selectedBerry.sweet)}</Row>
          <Row flavor="Sour">{DuoTypography("Sour", selectedBerry.sour)}</Row>
          <Row flavor="Bitter">{DuoTypography("Bitter", selectedBerry.bitter)}</Row>
        </Stack>
      </CardContent>
    </Card>
  );
}
