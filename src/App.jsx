import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

// #region Data
import apricorns from "../public/data/apricorns.json";
import berries from "../public/data/berries.json"
// #endregion

// #region Components
import EasySelect from "./components/interactables/EasySelect.jsx";
import BerryDisplay from "./components/displays/cards/BerryDisplay.jsx";
import ApricornDisplay from "./components/displays/cards/ApricornDisplay.jsx";
import ResultsDisplay from "./components/displays/cards/ResultsDisplay.jsx";
// #endregion

function App() {
  const [apricorn, setApricorn] = useState();

  console.log(apricorn);

  // TODO: Add Selectable Berries
  // TOD: Sort Berries by Stat

  // #region Render
  return (
    <>
      <Typography variant="h1">Aprijuice Calculator</Typography>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
        spacing={3}>
        <ApricornDisplay selectedApricorn={apricorns.find((element) => element.name == apricorn)} />
        <Stack
          sx={{
            width: "40%", justifyContent: "center",
            alignItems: "center",
          }}
        direction="row"
        spacing={3}
        >
        <BerryDisplay
          selectedBerry={berries[0]}
        />
        <BerryDisplay
          selectedBerry={berries[0]}
        />
        <BerryDisplay
          selectedBerry={berries[0]}
        />
      </Stack>
      <ResultsDisplay apricorn={apricorns.find((element) => element.name == apricorn)} berries={[berries[0], berries[0], berries[0]]} />
    </Stack >
      <Card>
        <CardContent>
          <EasySelect
            value={apricorn}
            setter={setApricorn}
            label="Apricorn"
            id="apricorn-selection"
            items={apricorns}
          />
        </ CardContent>
      </Card>
    </>
  );
  // #endregion
}

export default App;
