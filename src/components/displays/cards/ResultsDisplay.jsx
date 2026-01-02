import { Typography, Stack, Card, CardContent, Divider } from "@mui/material";
import { useMemo, useState } from "react";

import Row from "../rows/Row.jsx";
import FlavorBar from "../rows/FlavorBar.jsx";
import flavorThreshold from "../../FlavorThreshold.jsx";

export default function ResultsDisplay({ apricorn, berries }) {
  const [apricornName, setApricornName] = useState("");

  const stats = useMemo(() => {
    if (apricorn == undefined) {
      return;
    }

    // Intial Flavor Values
    var spicy = 0,
      dry = 0,
      sweet = 0,
      sour = 0,
      bitter = 0;

    // Sum Berry Stats
    berries.forEach((berry) => {
      spicy += berry.spicy;
      dry += berry.dry;
      sweet += berry.sweet;
      sour += berry.sour;
      bitter += berry.bitter;
    });

    // Threshold Cut Offs
    var acceleration = flavorThreshold(spicy);
    var skill = flavorThreshold(dry);
    var speed = flavorThreshold(sweet);
    var stamina = flavorThreshold(sour);
    var jump = flavorThreshold(bitter);

    // Add Base Apricorn
    acceleration += apricorn.acceleration;
    skill += apricorn.skill;
    speed += apricorn.speed;
    stamina += apricorn.stamina;
    jump += apricorn.jump;

    if (apricorn != undefined) {
      setApricornName(apricorn.name);
    }

    // Quality
    var qualityValue = acceleration + skill + speed + stamina + jump;
    var qualityLabel =
      qualityValue > 7 ? "Delicious" : qualityValue > 3 ? "Tasty" : "Plain";

    // Save into stats
    return {
      quality: qualityLabel,
      acceleration: acceleration,
      spicy: spicy,
      skill: skill,
      dry: dry,
      speed: speed,
      sweet: sweet,
      stamina: stamina,
      sour: sour,
      jump: jump,
      bitter: bitter,
    };
  }, [apricorn, berries]);

  console.log(stats);

  return (
    stats &&
    apricorn && (
      <Card sx={{ minWidth: 290, maxWidth: "20%" }}>
        <CardContent>
          <div align="center">
            <img
              src={
                "./images/aprijuice/" +
                stats.quality +
                "_" +
                apricornName +
                "_Aprijuice.png"
              }
              alt={stats.quality + " " + apricornName + " Aprijuice"}
              width="64"
              height="64"
            />
            <Typography variant="h4">
              {stats.quality} {apricornName} Aprijuice
            </Typography>
          </div>
          <br />
          <Stack container spacing={1}>
            <Row flavor="Acceleration">
              <FlavorBar
                stat="Acceleration"
                flavor={stats.spicy}
                value={stats.acceleration}
              />
            </Row>
            <Row flavor="Skill">
              <FlavorBar stat="Skill" flavor={stats.dry} value={stats.skill} />
            </Row>
            <Row flavor="Speed">
              <FlavorBar
                stat="Speed"
                flavor={stats.sweet}
                value={stats.speed}
              />
            </Row>
            <Row flavor="Stamina">
              <FlavorBar
                stat="Stamina"
                flavor={stats.sour}
                value={stats.stamina}
              />
            </Row>
            <Row flavor="Jump">
              <FlavorBar stat="Jump" flavor={stats.bitter} value={stats.jump} />
            </Row>
          </Stack>
        </CardContent>
      </Card>
    )
  );
}