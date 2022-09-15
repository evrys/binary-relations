export type RelationGrid = { [node: string]: { [node: string]: boolean } }

export type RelationCheck =
  | "functional"
  | "injective"
  | "total"
  | "surjective"
  | "bijective"


export function applyCheck(check: RelationCheck, grid: RelationGrid): boolean {
  const leftNodes = Object.keys(grid)
  const rightNodes = Object.keys(grid[leftNodes[0]])

  if (check === 'functional') {
    return leftNodes.every(
      (parent) => rightNodes.filter((child) => grid[parent][child]).length <= 1
    )
  } else if (check === 'injective') {
    return rightNodes.every(
      (child) => leftNodes.filter((parent) => grid[parent][child]).length <= 1
    )
  } else if (check === 'total') {
    return leftNodes.every((parent) =>
      rightNodes.some((child) => grid[parent][child])
    )
  } else if (check === 'surjective') {
    return rightNodes.every((child) =>
      leftNodes.some((parent) => grid[parent][child])
    )
  } else if (check === 'bijective') {
    return applyCheck('functional', grid) && applyCheck('injective', grid) && applyCheck('total', grid) && applyCheck('surjective', grid)
  } else {
    throw new Error(`Unknown check: ${check}`)
  }
}