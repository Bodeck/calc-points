const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const basePoints = hillSize === 'mamut' ? 120 : 60;
  let pointPerMeter;
  let distanceKPointDiff;
  switch (hillSize) {
    case 'normal':
      pointPerMeter = 2
      break;
    case 'large':
      pointPerMeter = 1.8
      break;
    case 'mamut':
      pointPerMeter = 1.2
    default:
      break;
  }
  distanceKPointDiff = distance - kPoint;

  return (basePoints + distanceKPointDiff*pointPerMeter);
};

module.exports = calculateDistancePoints;