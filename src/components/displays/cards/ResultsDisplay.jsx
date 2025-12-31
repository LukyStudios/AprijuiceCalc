import { Typography, Stack, Card, CardContent, Divider } from "@mui/material";
import { useEffect, useState } from "react";

import Row from "../rows/Row";
import FlavorBar from "../rows/FlavorBar";

export default function ResultsDisplay({ apricorn, berries }) {
    const [stats, setStats] = useState({})
    const [apricornName, setApricornName] = useState("")

    useEffect(() => {
        if (apricorn == undefined || berries.length <= 0) {
            return
        }

        // Intial Flavor Values
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

        if (apricorn != undefined) {
            setApricornName(apricorn.name)
        }

        // Quality
        var qualityValue = acceleration + skill + speed + stamina + jump
        var qualityLabel = qualityValue > 7 ? "Delicious" : qualityValue > 3 ? "Tasty" : "Plain"

        // Save into stats
        setStats(
            {
                "quality": qualityLabel,
                "acceleration": acceleration,
                "spicy": spicy,
                "skill": skill,
                "dry": dry,
                "speed": speed,
                "sweet": sweet,
                "stamina": stamina,
                "sour": sour,
                "jump": jump,
                "bitter": bitter
            })

    }, [apricorn, berries])

    console.log(stats)

    return stats && apricorn && <Card sx={{ minWidth: 290, maxWidth: '20%' }}>
        <CardContent>
            <div align="center">
                <img
                    src={"./images/aprijuice/" + stats.quality + "_" + apricornName + "_Aprijuice.png"}
                    alt={stats.quality + " " + apricornName + " Aprijuice"}
                    width="64"
                    height="64" />
                <Typography variant="h3">{stats.quality} {apricornName} Aprijuice</Typography>
            </div>
            <Stack container spacing={1}>
                <Row>{FlavorBar("Acceleration", stats.spicy, stats.acceleration)}</Row>
                <Row>{FlavorBar("Skill", stats.dry, stats.skill)}</Row>
                <Row>{FlavorBar("Speed", stats.sweet, stats.speed)}</Row>
                <Row>{FlavorBar("Jump", stats.bitter, stats.jump)}</Row>
                <Row>{FlavorBar("Stamina", stats.sour, stats.stamina)}</Row>
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