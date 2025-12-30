import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

import SelectWithDelete from "./components/SelectWithDelete.jsx";
import EasySelect from "./components/EasySelect.jsx";

// #region Data
import apricorns from "../public/data/apricorns.json";
// #endregion

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
        </CardContent>
      </Card>
    </>
  );
  // #endregion
}

export default App;
