import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

import "./App.css";

// #region Data
import apricorns from "../public/data/apricorns.json";
import berries from "../public/data/berries.json";
// #endregion

// #region Components
import EasySelect from "./components/interactables/EasySelect.jsx";
import BerryDisplay from "./components/displays/cards/BerryDisplay.jsx";
import ApricornDisplay from "./components/displays/cards/ApricornDisplay.jsx";
import ResultsDisplay from "./components/displays/cards/ResultsDisplay.jsx";
import FilterBerries from "./components/FilterBerries.jsx";
// #endregion

function App() {
  const [apricorn, setApricorn] = useState();
  const [selectedBerries, setSelectedBerries] = useState([]);

  console.log(apricorn);

  function addBerry(berry) {
    // Only allow for a max of 3 berries to be selected
    if (selectedBerries.length < 3) {
      setSelectedBerries(selectedBerries.concat(berry));
      return true;
    }

    return false;
  }

  function removeBerry(berry) {
    const index = selectedBerries.findIndex(
      (element) => element.name == berry.name
    );
    console.log(index);

    if (index > -1) {
      var tempArr = [...selectedBerries];
      tempArr.splice(index, 1);

      setSelectedBerries(tempArr);
      return true;
    }
    return false;
  }
  // TOD: Sort Berries by Stat
  console.log(selectedBerries);

  // #region Render
  return (
    <>
      <Typography textAlign="center" variant="h2">
        Apri-Blender
      </Typography>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
        spacing={3}
      >
        <ApricornDisplay
          selectedApricorn={apricorns.find(
            (element) => element.name == apricorn
          )}
        />
        <Stack
          sx={{
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="row"
          spacing={3}
        >
          {selectedBerries.map((berry) => {
            return <BerryDisplay selectedBerry={berry} />;
          })}
        </Stack>
        <ResultsDisplay
          apricorn={apricorns.find((element) => element.name == apricorn)}
          berries={selectedBerries}
        />
      </Stack>
      <Card>
        <CardContent>
          <EasySelect
            value={apricorn}
            setter={setApricorn}
            label="Apricorn"
            id="apricorn-selection"
            items={apricorns}
          />
        </CardContent>
        <FilterBerries
          berries={berries}
          addBerry={addBerry}
          removeBerry={removeBerry}
        />
      </Card>
    </>
  );
  // #endregion
}

export default App;
