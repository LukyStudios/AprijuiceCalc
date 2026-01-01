import { LinearProgress, Typography, Grid } from "@mui/material";

export default function FlavorBar({ stat, flavor, value, ...props }) {
  // TODO: Add tick marks for thresholds

  return (
    <Grid
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
        <LinearProgress
          variant="determinate"
          value={flavorToPercentage(flavor)}
          color={matchColor(stat)}
        />
      </Grid>
      <Grid size={2}>
        <Typography align="right">{value}</Typography>
      </Grid>
    </Grid>
  );
}

function flavorToPercentage(flavor) {
  return Math.min((flavor / 105) * 100, 100);
}

function matchColor(stat) {
  switch (stat) {
    case "Acceleration":
      return "error";
    case "Skill":
      return "info";
    case "Speed":
      return "secondary";
    case "Stamina":
      return "warning";
    case "Jump":
      return "success";
    default:
      return "primary";
  }
}
