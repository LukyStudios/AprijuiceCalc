import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Stack,
} from "@mui/material";
import BerrySelection from "./displays/cards/BerrySelection";
import CheckedSelect from "./interactables/CheckedSelect";

export default function FilterBerries({
  berries,
  addBerry,
  removeBerry,
  ...props
}) {
  const [showStats, setShowStats] = useState(true);

  function toggleStats() {
    setShowStats(!showStats);
  }

  const filteredBerries = useMemo(() => {
    return berries;
  }, [showStats]);
  // console.log(berries);

  return (
    <Accordion>
      <AccordionSummary component="span">
        <Typography>Berries</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CheckedSelect label="Stats" values={['Spicy', 'Sour', 'Dry', 'Bitter', 'Sweet']}/>
        <Stack
          contianer
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          direction="row"
          spacing={2}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  value={showStats}
                  onClick={toggleStats}
                />
              }
              label="Show Flavor"
            />
          </FormGroup>
        </Stack>
        {berries && (
          <Grid
            direction="row"
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
            container
            spacing={1}
          >
            {berries.map((berry) => {
              return (
                <BerrySelection
                  berry={berry}
                  addBerry={addBerry}
                  removeBerry={removeBerry}
                  viewStats={showStats}
                />
              );
            })}
          </Grid>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
