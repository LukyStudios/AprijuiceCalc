import { useState } from "react";
import { Grid } from "@mui/material";
import BerryDisplay from "./displays/cards/BerryDisplay";
import BerrySelection from "./displays/cards/BerrySelection";

export default function FilterBerries({
  berries,
  addBerry,
  removeBerry,
  ...props
}) {
  const [showStats, setShowStats] = useState(true);

  // console.log(berries);

  return (
    berries && (
      <Grid container spacing={1}>
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
    )
  );
}
