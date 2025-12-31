import { Typography, Stack, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";

import GridRow from "./GridRow";

export default function ResultsDisplay({ apricorn, berries }) {
    const [stats, setStats] = useState({})

    useEffect(() => {
        if (apricorn == undefined || berries.length <= 0) {
            return
        }

        var spicy = 0, dry = 0, sweet = 0, sour = 0, bitter = 0

        // Sum Berry Stats
        berries.forEach(berry => {
            spicy += berry.spicy
            dry += berry.dry
            sweet += berry.sweet
            sour += berry.sour
            bitter += berry.bitter
        });

        // Threshold Cut Offs
        var acceleration = flavorThreshold(spicy)
        var skill = flavorThreshold(dry)
        var speed = flavorThreshold(sweet)
        var stamina = flavorThreshold(sour)
        var jump = flavorThreshold(bitter)

        // Add Base Apricorn
        acceleration += apricorn.acceleration
        skill += apricorn.skill
        speed += apricorn.speed
        stamina += apricorn.stamina
        jump += apricorn.jump

        // Quality
        var qualityValue = acceleration + skill + speed + stamina + jump
        var qualityLabel = qualityValue > 7 ? "Delicious" : qualityValue > 3 ? "Tasty" : "Plain"

        // Save into stats
        setStats(
            {
                "quality": qualityLabel,
                "acceleration": acceleration,
                "skill": skill,
                "speed": speed,
                "stamina": stamina,
                "jump": jump
            })

    }, [apricorn, berries])

    console.log(stats)

    var apricornName = ""
    if (apricorn != undefined) {
        apricornName = apricorn.name
    }

    return stats && <Card>
        <CardContent>
            <Typography variant="h2">{stats.quality} {apricornName} Aprijuice</Typography>
            <img
                src={"../public/images/aprijuice/" + stats.quality + "_" + apricornName + "_Aprijuice.png"}
                alt={stats.quality + " " + apricornName + " Aprijuice"}
                width="64"
                height="64" />
            <Stack container spacing={1}>
                {GridRow("Acceleration", stats.acceleration)}
                {GridRow("Skill", stats.skill)}
                {GridRow("Speed", stats.speed)}
                {GridRow("Jump", stats.jump)}
                {GridRow("Stamina", stats.stamina)}
            </Stack>
        </CardContent>
    </Card>
}

function flavorThreshold(flavor) {
    var statBoost = 0

    if (flavor >= 15) {
        statBoost += 1
    }
    if (flavor >= 35) {
        statBoost += 1
    }
    if (flavor >= 45) {
        statBoost += 1
    }
    if (flavor >= 55) {
        statBoost += 1
    }
    if (flavor >= 75) {
        statBoost += 1
    }
    if (flavor >= 105) {
        statBoost += 1
    }

    return statBoost
}