import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";

export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType
) => {
  const updateTileClass = async (r: number, c: number) => {
    const element = document.getElementById(`${r}-${c}`);
    if (element) {
      element.className = TILE_STYLE;
      await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
    }
  };

  if (isRight && grid[row][col + 1]) {
    grid[row][col + 1].isWall = false;
    await updateTileClass(row, col + 1);
  } else if (grid[row + 1]) {
    grid[row + 1][col].isWall = false;
    await updateTileClass(row + 1, col);
  } else {
    grid[row][col].isWall = false;
    await updateTileClass(row, col);
  }
};
