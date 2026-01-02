import { useState } from "react";
import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";

import Row from "../rows/Row.jsx";
import DuoTypography from "../rows/DuoTypography.jsx";
import NumberSpinner from "../../interactables/NumberSpinner.jsx";

export default function BerrySelection({
  berry,
  addBerry,
  removeBerry,
  viewFlavor,
  selected,
  ...props
}) {
  const [amount, setAmount] = useState(0);
  // console.log(berry, selected)

  return (
    berry && selected && (
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
            value={amount}
            setValue={setAmount}
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
