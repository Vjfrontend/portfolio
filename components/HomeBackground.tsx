"use client";
import { SpringValue } from "@react-spring/web";
import DottedLine from "@/components/background/DottedLine";
import HorizontalDottedLine from "@/components/background/HorizontalDottedLine";
import HomeBackgroundProps from"./props";
import { animationOrder } from "@/components/data/home-background";

export default function HomeBackground({
  glowBackground,
  revealBackground,
}: HomeBackgroundProps) {
  const COLUMNS = 7;
  const ROWS = 4;
  const SQUARE_COUNT = COLUMNS * ROWS - 1;

  return (
    <div
      className="bg-fit grid grid-cols-7 w-[750px]  lg:w-[1200px] -z-10 h-fit lg:mt-56 absolute top-1/2 mt-32 -translate-y-1/2 lg:left-1/2  left-0 -translate-x-1/2">
      {Array(SQUARE_COUNT)
        .fill(0)
        .map((_, index) => (
          <BackgroundSquare
            key={index}
            lines={
              (index + 1) / COLUMNS > 3
                ? [0, 1, 0, 0]
                : (index + 1) % COLUMNS === 0
                  ? [0, 0, 1, 0]
                  : [0, 1, 1, 0]
            }
            plus={(index + 1) / COLUMNS < 3 && (index + 1) % COLUMNS !== 0}
            lineAnimation={[
              revealBackground[animationOrder[index]],
              glowBackground[animationOrder[index]],
            ]}
          />
        ))}
    </div>
  );
}

interface BackgroundSquareProps {
  lines: (0 | 1)[];
  plus: boolean;
  lineAnimation: [{ size: SpringValue<string> }, { pos: SpringValue<number> }];
}

function BackgroundSquare({
  lines,
  lineAnimation,
}: BackgroundSquareProps) {
  return (
    <div className="bg-section  h-[150px] relative">
      {!!lines[0] && (
        <div className="absolute top-0 -translate-x-1/2 ">
          <HorizontalDottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[1] && (
        <div className="absolute right-0 -translate-y-1/2 top-1/2">
          <DottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[2] && (
        <div className="absolute -translate-x-1/2 top-full ">
          <HorizontalDottedLine animation={lineAnimation} />
        </div>
      )}
      {!!lines[3] && (
        <div className="absolute left-0 -translate-y-1/2 top-1/2">
          <DottedLine animation={lineAnimation} />
        </div>
      )}
    </div>
  );
}
