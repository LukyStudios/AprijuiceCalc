import {
  Card,
  Typography,
  Stack,
  CardContent
} from "@mui/material";

import Row from "../rows/Row";
import DuoTypography from "../rows/DuoTypography";

export default function ApricornDisplay({ selectedApricorn, ...props }) {
  console.log(selectedApricorn);

  // TODO: Color each stat
  return (
    selectedApricorn && <Card sx={{ minWidth: 160, width: '25%' }}>
      <CardContent>
        <div align="center">
          <img
            src={"../public/images/apricorns/" + selectedApricorn.name + "_Apricorn.png"}
            alt={selectedApricorn.name + " Apricorn"}
            width="64"
            height="64"
          />
          <Typography variant="h4">{selectedApricorn.name} Apricorn</Typography>
        </div>
        <Stack container spacing={1}>
          <Row>{DuoTypography("Acceleration", selectedApricorn.acceleration)}</Row>
          <Row>{DuoTypography("Skill", selectedApricorn.skill)}</Row>
          <Row>{DuoTypography("Speed", selectedApricorn.speed)}</Row>
          <Row>{DuoTypography("Jump", selectedApricorn.jump)}</Row>
          <Row>{DuoTypography("Stamina", selectedApricorn.stamina)}</Row>
        </Stack>
      </CardContent>
    </Card>
  );
}
