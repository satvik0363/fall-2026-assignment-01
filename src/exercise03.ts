export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory
    .filter(([, quantity]) => quantity > 5)
    .reduce((total, [, quantity, pricePerUnit]) => {
      return total + quantity * pricePerUnit;
    }, 0);
}
