import p5 from "p5";
import Spiral, { Direction } from "./Spiral";

export default class CircleSpiral extends Spiral {
  constructor(p: p5, nElements: number, speed: number, direction?: Direction) {
    super(p, nElements, speed, direction || Direction.CLOCKWISE);
  }

  protected drawElement(): void {
    const { p, theta, radius } = this;
    p.fill(this.getFillColor());
    p.strokeWeight(this.getStrokeWeight());
    p.stroke(this.getStrokeColor());
    p.circle(
      radius * Math.cos(theta),
      radius * Math.sin(theta),
      this.getSize()
    );
  }

  protected getFillColor(): string {
    return "#fff";
  }

  protected getStrokeColor(): string {
    return "#000";
  }

  protected getStrokeWeight(): number {
    return 1;
  }

  protected getSize(): number {
    return 50;
  }
}
