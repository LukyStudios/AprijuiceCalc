import { LinearProgress, Typography, Grid } from "@mui/material"

export default function FlavorBar(stat, flavor, value) {
    // TODO: Add tick marks for thresholds

    return <Grid
        container
        direction="row"
        spacing={0}
        sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <Grid size={5}>
            <Typography>{stat}</Typography>
        </Grid>
        <Grid size={5}>
            <LinearProgress variant="determinate" value={flavor / 105 * 100} /> 
        </Grid>
        <Grid size={2}>
            <Typography align='right'>{value}</Typography>
        </Grid>
    </Grid>
}