import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";

import "./App.css";

// #region Data
const apricornsURL = "/AprijuiceCalc/data/apricorns.json"; // Need to include base to point at correct URL
const berriesURL = "/AprijuiceCalc/data/berries.json";    // Bad practicing hardcoding but Im too tired to figure out the correct solution
// #endregion

// #region Components
import EasySelect from "./components/interactables/EasySelect.jsx";
import BerryDisplay from "./components/displays/cards/BerryDisplay.jsx";
import ApricornDisplay from "./components/displays/cards/ApricornDisplay.jsx";
import ResultsDisplay from "./components/displays/cards/ResultsDisplay.jsx";
import FilterBerries from "./components/FilterBerries.jsx";
import useFetch from "./hooks/useFetch.jsx";
// #endregion

function App() {
  const [apricorn, setApricorn] = useState();
  const [selectedBerries, setSelectedBerries] = useState([]);

  const [apricorns, setApricorns] = useState(null);
  const [apricornsLoading, setApricornsLoading] = useState(true);
  const [apricornsError, setApricornsError] = useState(null);

  useFetch(setApricorns, setApricornsLoading, setApricornsError, apricornsURL);

  const [berries, setBerries] = useState(null);
  const [berriesLoading, setBerriesLoading] = useState(true);
  const [berriesError, setBerriesError] = useState(null);
  useFetch(setBerries, setBerriesLoading, setBerriesError, berriesURL);

  if (apricornsLoading || berriesLoading) {
    return <CircularProgress />;
  }
  if (apricornsError) {
    return <Typography color="error"> Error loading Apricorns</Typography>;
  }
  if (berriesError) {
    return <Typography color="error"> Error loading Berries </Typography>;
  }

  console.log(apricorns);
  console.log(berries)

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
  // console.log(selectedBerries);

  // #region Render
  return (
    apricorns &&
    berries && (
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
    )
  );
  // #endregion
}

export default App;
