const calculateStylePoints = (styleNotes) => {
  const tempArr = styleNotes.sort().slice(1,4);
  return tempArr.reduce((total, note) => total + note);
}

module.exports = calculateStylePoints;