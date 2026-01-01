import { Card, CardContent, Typography, Stack } from "@mui/material";
import Row from "../rows/Row";
import DuoTypography from "../rows/DuoTypography";
import NumberSpinner from "../../interactables/NumberSpinner";

export default function BerrySelection({
  berry,
  addBerry,
  removeBerry,
  viewStats,
  ...props
}) {
  // TODO: Color each stat

  return (
    berry && <Card sx={{ width: "10%" }}>
      <CardContent>
        <div align="center">
          <img
            src={"./images/berries/" + berry.name + "_Berry.png"}
            alt={berry.name + " Berry"}
            width="32"
            height="32"
          />
          <Typography variant="h6">{berry.name} <br /> Berry</Typography>
        </div>
        <NumberSpinner label="Amount" min={0} max={3} size="small" defaultValue={0} />
        {viewStats && (
          <Stack container spacing={1}>
            <Row>{DuoTypography("Spicy", berry.spicy)}</Row>
            <Row>{DuoTypography("Dry", berry.dry)}</Row>
            <Row>{DuoTypography("Sweet", berry.sweet)}</Row>
            <Row>{DuoTypography("Bitter", berry.bitter)}</Row>
            <Row>{DuoTypography("Sour", berry.sour)}</Row>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
