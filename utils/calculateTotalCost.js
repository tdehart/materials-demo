/**
 * return total cost of a material
 * @param   {string} selectedMaterial selected material
 * @return  {float} total cost of material
 */
export default function calculateTotalCost(selectedMaterial) {
  if (!selectedMaterial) return 0;

  const { volume, cost } = selectedMaterial;

  const parsedVolume = parseFloat(volume);
  const parsedCost = parseFloat(cost);

  if (isNaN(parsedVolume) || isNaN(parsedCost)) return 0;

  return parsedVolume * parsedCost;
};