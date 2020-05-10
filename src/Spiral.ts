import p5 from "p5";

export enum Direction {
  CLOCKWISE,
  COUNTER_CLOCKWISE,
}

export default abstract class Spiral {
  protected GOLDEN: number;
  protected theta: number;
  protected radius: number;

  constructor(
    protected p: p5,
    protected nElements: number,
    protected speed: number,
    protected direction: Direction
  ) {
    this.GOLDEN = this.p.PI * (3 - this.p.sqrt(5));
    this.theta = 0;
    this.radius = 0;
  }

  public draw(): void {
    for (let n = 0; n < this.nElements; n++) {
      this.theta =
        this.GOLDEN * n +
        this.getDirectionModifier() * this.speed * this.p.frameCount;
      this.radius = n;
      this.drawElement();
    }
  }

  protected getDirectionModifier(): number {
    return this.direction === Direction.COUNTER_CLOCKWISE ? -1 : 1;
  }

  protected abstract drawElement(): void;
}
