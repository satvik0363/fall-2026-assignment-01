export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  let minimum = 5;
  const greater = inventory.filter(quantity => minimum);
  const sum = inventory.reduce((quantity, price) => quantity * price);
  return 0;
}
