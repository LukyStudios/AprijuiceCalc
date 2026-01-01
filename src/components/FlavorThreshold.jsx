export default function flavorThreshold(flavor) {
  var statBoost = 0;

  if (flavor >= 15) {
    statBoost += 1;
  }
  if (flavor >= 35) {
    statBoost += 1;
  }
  if (flavor >= 45) {
    statBoost += 1;
  }
  if (flavor >= 55) {
    statBoost += 1;
  }
  if (flavor >= 75) {
    statBoost += 1;
  }
  if (flavor >= 105) {
    statBoost += 1;
  }

  return statBoost;
}
