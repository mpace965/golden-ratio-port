import p5 from "p5";

import CircleSpiral from "./CircleSpiral";
import { Direction } from "./Spiral";

export default class SineScalableCircleSpiral extends CircleSpiral {
  constructor(
    p: p5,
    nElements: number,
    speed: number,
    protected minSize = 0.0,
    protected maxSize = 50.0,
    protected sineSpeed = 1.0,
    direction?: Direction
  ) {
    super(p, nElements, speed, direction || Direction.CLOCKWISE);
  }

  protected getAmplitude(): number {
    return (this.maxSize - this.minSize) / 2;
  }

  protected getMidline(): number {
    return this.maxSize - this.getAmplitude();
  }

  protected getSize(): number {
    const { p, radius, sineSpeed } = this;
    return (
      this.getAmplitude() *
        Math.cos(p.radians(radius + p.frameCount * sineSpeed)) +
      this.getMidline()
    );
  }
}
