import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

// #region Data
import apricorns from "../public/data/apricorns.json";
// #endregion

import SelectWithDelete from "./components/SelectWithDelete.jsx";
import EasySelect from "./components/EasySelect.jsx";
import BerryDisplay from "./components/BerryDisplay.jsx";

function App() {
  const [apricorn, setApricorn] = useState();

  //console.log(apricorns);

  // #region Render
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h1">Aprijuice Calculator</Typography>
          <EasySelect
            value={apricorn}
            setter={setApricorn}
            label="Apricorn"
            id="apricorn-selection"
            items={apricorns}
          />
          <Stack
            sx={{ width: "100%", display: "inline-flex", alignItems: "center" }}
            direction="row"
            spacing={3}
          >
            <BerryDisplay
              selectedBerry={{
                name: "Kee",
                acceleration: 30,
                skill: 30,
                speed: 10,
                stamina: 10,
                jump: 10,
              }}
            />
            <BerryDisplay
              selectedBerry={{
                name: "Kee",
                acceleration: 30,
                skill: 30,
                speed: 10,
                stamina: 10,
                jump: 10,
              }}
            />
            <BerryDisplay
              selectedBerry={{
                name: "Kee",
                acceleration: 30,
                skill: 30,
                speed: 10,
                stamina: 10,
                jump: 10,
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
  // #endregion
}

export default App;
