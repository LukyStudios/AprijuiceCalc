import { LinearProgress, Typography, Grid, Divider } from "@mui/material";

export default function FlavorBar({ stat, flavor, value, ...props }) {
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
      <Grid sx={{ position: "relative", maxWidth: "105px" }} size={5}>
        <LinearProgress
          sx={{ borderRadius: 1, height: 16 }}
          variant="determinate"
          value={flavorToPercentage(flavor)}
          color={matchColor(stat)}
        />
        <div style={{ position: "absolute", width: "100%" }}>
          <Divider
            sx={{
              left: flavorToPercentage(15) + "px",
              position: "absolute",
              top: "-16px",
              height: 16,
            }}
            orientation="vertical"
          />
          <Divider
            sx={{
              left: flavorToPercentage(35) + "px",
              position: "absolute",
              top: "-16px",
              height: 16,
            }}
            orientation="vertical"
          />
          <Divider
            sx={{
              left: flavorToPercentage(45) + "px",
              position: "absolute",
              top: "-16px",
              height: 16,
            }}
            orientation="vertical"
          />
          <Divider
            sx={{
              left: flavorToPercentage(55) + "px",
              position: "absolute",
              top: "-16px",
              height: 16,
            }}
            orientation="vertical"
          />
          <Divider
            sx={{
              left: flavorToPercentage(75) + "px",
              position: "absolute",
              top: "-16px",
              height: 16,
            }}
            orientation="vertical"
          />
        </div>
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
