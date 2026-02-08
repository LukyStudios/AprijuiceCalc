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
  isGrid = true,
  ...props
}) {
  const [amount, setAmount] = useState(0);
  // console.log(berry, selected)

  return (
    berry && selected && (
      isGrid &&
      (<Card>
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
                  <Row flavor="Spicy" >
                    {DuoTypography("Spicy", berry.spicy)}
                  </Row>
                  <Row flavor="Dry" >{DuoTypography("Dry", berry.dry)}</Row>
                  <Row flavor="Sweet" >
                    {DuoTypography("Sweet", berry.sweet)}
                  </Row>
                  <Row flavor="Sour" >{DuoTypography("Sour", berry.sour)}</Row>
                  <Row flavor="Bitter" >
                    {DuoTypography("Bitter", berry.bitter)}
                  </Row>
                </Stack>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
      ) || (
        <Card>
          <CardContent align="center">
            <Stack direction="row" container spacing={1} sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
              <div>
                <img
                  src={"./images/berries/" + berry.name + "_Berry.png"}
                  alt={berry.name + " Berry"}
                  width="48"
                  height="48"
                />
                <NumberSpinner
                  value={amount}
                  setValue={setAmount}
                  addBerry={addBerry}
                  removeBerry={removeBerry}
                  berry={berry}
                  min="0"
                  max="3"
                />
              </div>
              <div>
                {viewFlavor && (
                  <Stack container spacing={1} sx={{ justifyContent: 'space-between' }}>
                    <Typography align="left" variant="h5">
                      {berry.name} Berry
                    </Typography>
                    <Stack direction="row" container spacing={1}>
                      <Row flavor="Spicy" >
                        <Typography sx={{ minWidth: '18px' }}>{berry.spicy}</Typography>
                      </Row>
                      <Row flavor="Dry"><Typography sx={{ minWidth: '18px' }}>{berry.dry}</Typography></Row>
                      <Row flavor="Sweet">
                        <Typography sx={{ minWidth: '18px' }}>{berry.sweet}</Typography>
                      </Row>
                      <Row flavor="Sour"><Typography sx={{ minWidth: '18px' }}>{berry.sour}</Typography></Row>
                      <Row flavor="Bitter">
                        <Typography sx={{ minWidth: '18px' }}>{berry.bitter}</Typography>
                      </Row>
                    </Stack>
                  </ Stack>
                )}
              </div>
            </Stack>
          </CardContent>
        </Card>
      )
    )
  );
}
