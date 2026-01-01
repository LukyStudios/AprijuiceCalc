import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";
import Row from "../rows/Row";
import DuoTypography from "../rows/DuoTypography";
import NumberSpinner from "../../interactables/NumberSpinner";

export default function BerrySelection({
  berry,
  addBerry,
  removeBerry,
  viewFlavor,
  ...props
}) {
  return (
    berry && (
      <Card>
        <CardContent align="center">
          <img
            src={"./images/berries/" + berry.name + "_Berry.png"}
            alt={berry.name + " Berry"}
            width="64"
            height="64"
          />
          <Typography variant="h6">
            {berry.name} <br /> Berry
          </Typography>
          <NumberSpinner
            addBerry={addBerry}
            removeBerry={removeBerry}
            berry={berry}
            min="0"
            max="3"
          />
          <Stack spacing={1}>
            {viewFlavor && (
              <>
                <Divider />
                <Stack container spacing={1}>
                  <Row flavor="Spicy">
                    {DuoTypography("Spicy", berry.spicy)}
                  </Row>
                  <Row flavor="Dry">{DuoTypography("Dry", berry.dry)}</Row>
                  <Row flavor="Sweet">
                    {DuoTypography("Sweet", berry.sweet)}
                  </Row>
                  <Row flavor="Bitter">
                    {DuoTypography("Bitter", berry.bitter)}
                  </Row>
                  <Row flavor="Sour">{DuoTypography("Sour", berry.sour)}</Row>
                </Stack>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    )
  );
}
