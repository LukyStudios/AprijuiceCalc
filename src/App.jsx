import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

// #region Data
import apricorns from "../public/data/apricorns.json";
import berries from "../public/data/berries.json"
// #endregion

import SelectWithDelete from "./components/SelectWithDelete.jsx";
import EasySelect from "./components/EasySelect.jsx";
import BerryDisplay from "./components/BerryDisplay.jsx";
import ApricornDisplay from "./components/ApricornDisplay.jsx";
import ResultsDisplay from "./components/ResultsDisplay.jsx";

function App() {
  const [apricorn, setApricorn] = useState();

  console.log(apricorn);

  // TODO: Add Selectable Berries
  // TOD: Sort Berries by Stat

  // #region Render
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h1">Aprijuice Calculator</Typography>
          <Stack sx={{ width: "100%", display: "inline-flex", alignItems: "center" }} direction="row" spacing={3}>
            <div>
              <EasySelect
                value={apricorn}
                setter={setApricorn}
                label="Apricorn"
                id="apricorn-selection"
                items={apricorns}
              />
              <ApricornDisplay selectedApricorn={apricorns.find((element) => element.name == apricorn)} />
            </div>
            <Stack
              sx={{ width: "100%", display: "inline-flex", alignItems: "center" }}
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
          </Stack>
        </CardContent>
      </Card>
    </>
  );
  // #endregion
}

export default App;
