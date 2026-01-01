import { Card, Typography, Stack, CardContent } from "@mui/material";

import Row from "../rows/Row.jsx";
import DuoTypography from "../rows/DuoTypography.jsx";

export default function ApricornDisplay({ selectedApricorn, ...props }) {
  console.log(selectedApricorn);

  return (
    selectedApricorn && (
      <Card sx={{ minWidth: 160, width: "20%" }}>
        <CardContent>
          <div align="center">
            <img
              src={
                "./images/apricorns/" + selectedApricorn.name + "_Apricorn.png"
              }
              alt={selectedApricorn.name + " Apricorn"}
              width="64"
              height="64"
            />
            <Typography variant="h4">
              {selectedApricorn.name} Apricorn
            </Typography>
          </div>
          <br />
          <Stack container spacing={1}>
            <Row flavor="Acceleration">
              {DuoTypography("Acceleration", selectedApricorn.acceleration)}
            </Row>
            <Row flavor="Skill">
              {DuoTypography("Skill", selectedApricorn.skill)}
            </Row>
            <Row flavor="Speed">
              {DuoTypography("Speed", selectedApricorn.speed)}
            </Row>
            <Row flavor="Stamina">
              {DuoTypography("Stamina", selectedApricorn.stamina)}
            </Row>
            <Row flavor="Jump">
              {DuoTypography("Jump", selectedApricorn.jump)}
            </Row>
          </Stack>
        </CardContent>
      </Card>
    )
  );
}
