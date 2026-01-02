import { red, indigo, pink, orange, green } from "@mui/material/colors";

export default function paletteFromFlavor(flavor) {
  switch (flavor) {
    case "Spicy":
    case "Acceleration":
      return {
        borderColor: red["A700"],
        bgcolor: red["100"],
        color: red["A700"],
      };
    case "Dry":
    case "Skill":
      return {
        borderColor: indigo["900"],
        bgcolor: indigo["100"],
        color: indigo["900"],
      };
    case "Sweet":
    case "Speed":
      return {
        borderColor: pink["900"],
        bgcolor: pink["100"],
        color: pink["900"],
      };
    case "Sour":
    case "Stamina":
      return {
        borderColor: orange["900"],
        bgcolor: orange["100"],
        color: orange["900"],
      };
    case "Bitter":
    case "Jump":
      return {
        borderColor: green["900"],
        bgcolor: green["100"],
        color: green["900"],
      };
    default:
      return {
        borderColor: "text.secondary",
        bgcolor: "background.paper",
        color: "text.secondary",
      };
  }
}
