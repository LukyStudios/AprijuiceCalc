import { useState, useMemo } from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import BerrySelection from "./displays/cards/BerrySelection";
import CheckedSelect from "./interactables/CheckedSelect";
import EasySelect from "./interactables/EasySelect";

const flavor = ["Spicy", "Dry", "Sweet", "Bitter", "Sour"];
const sortingOptions = [
  "Unsorted",
  "Most Juicy",
  "Least Juicy",
  "Most Flavorful",
  "Least Flavorful",
];

export default function FilterBerries({
  berries,
  addBerry,
  removeBerry,
  ...props
}) {
  const [showFlavor, setShowFlavor] = useState(true);
  const [selectedFlavor, setSelectedFlavor] = useState([...flavor]);
  const [sorting, setSorting] = useState(sortingOptions[0]);

  function toggleFlavor() {
    setShowFlavor(!showFlavor);
  }

  const filteredBerries = useMemo(() => {
    var tempBerries = [...berries];

    // Flavor Filtering (Include if has any listed flavors)
    tempBerries = tempBerries.filter((berry) =>
      hasFlavor(berry, selectedFlavor)
    );

    // Sorting
    switch (sorting) {
      case sortingOptions[1]: // Most Juicy
        tempBerries.sort((a, b) => {
          const aJuice = juiciness(a, flavor);
          const bJuice = juiciness(b, flavor);

          if (aJuice > bJuice) {
            return -1;
          }
          if (aJuice < bJuice) {
            return 1;
          }
          return 0; // Must be Equal
        });
        break;

      case sortingOptions[2]: // Least Juicy
        tempBerries.sort((a, b) => {
          const aJuice = juiciness(a, flavor);
          const bJuice = juiciness(b, flavor);

          if (aJuice < bJuice) {
            return -1;
          }
          if (aJuice > bJuice) {
            return 1;
          }
          return 0; // Must be Equal
        });
        break;

      case sortingOptions[3]: // Most Flavoful
        tempBerries.sort((a, b) => {
          const aJuice = juiciness(a, selectedFlavor);
          const bJuice = juiciness(b, selectedFlavor);

          if (aJuice > bJuice) {
            return -1;
          }
          if (aJuice < bJuice) {
            return 1;
          }
          return 0; // Must be Equal
        });
        break;

      case sortingOptions[4]: // Least Juicy
        tempBerries.sort((a, b) => {
          const aJuice = juiciness(a, selectedFlavor);
          const bJuice = juiciness(b, selectedFlavor);

          if (aJuice < bJuice) {
            return -1;
          }
          if (aJuice > bJuice) {
            return 1;
          }
          return 0; // Must be Equal
        });
        break;

      default:
        break;
    }

    console.log(tempBerries);

    return tempBerries;
  }, [selectedFlavor, sorting]);
  // console.log(berries);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="span">Berries</Typography>
        <Stack
          contianer
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
          direction="row"
        >
          <CheckedSelect
            label="Flavors"
            id="flavors"
            values={selectedFlavor}
            setter={setSelectedFlavor}
            items={flavor}
          />
          <EasySelect
            value={sorting}
            setter={setSorting}
            label="Sorting"
            id="sorting"
            items={sortingOptions}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  value={showFlavor}
                  onClick={toggleFlavor}
                />
              }
              label="Show Flavor"
            />
          </FormGroup>
        </Stack>
        {filteredBerries && (
          <Grid
            direction="row"
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
            container
            spacing={1}
          >
            {filteredBerries.map((berry) => {
              return (
                <BerrySelection
                  berry={berry}
                  addBerry={addBerry}
                  removeBerry={removeBerry}
                  viewFlavor={showFlavor}
                />
              );
            })}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}

function hasFlavor(berry, flavors) {
  let hasFlavor = false;

  flavors.map(
    (flavor) => (hasFlavor = hasFlavor || berry[flavor.toLowerCase()] > 0)
  );
  console.log(berry, hasFlavor);

  return hasFlavor;
}

function juiciness(berry, flavors) {
  let juice = 0;

  flavors.map((flavor) => (juice += berry[flavor.toLowerCase()]));

  return juice;
}
