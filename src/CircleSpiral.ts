import p5 from "p5";
import Spiral, { Direction } from "./Spiral";

export default class CircleSpiral extends Spiral {
  constructor(p: p5, nElements: number, speed: number, direction?: Direction) {
    super(p, nElements, speed, direction || Direction.CLOCKWISE);
  }

  protected drawElement(): void {
    const { p, theta, radius } = this;
    p.fill(255);
    p.strokeWeight(1);
    p.stroke(0);
    p.circle(radius * p.cos(theta), radius * p.sin(theta), 50);
  }
}
