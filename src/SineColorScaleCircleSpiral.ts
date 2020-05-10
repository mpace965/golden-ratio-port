import SineScalableCircleSpiral from "./SineScalableCircleSpiral";

interface ColorRange {
  start: number;
  end: number;
}

export default class SineColorScaleCircleSpiral extends SineScalableCircleSpiral {
  protected red: ColorRange = { start: 0, end: 0 };
  protected green: ColorRange = { start: 0, end: 0 };
  protected blue: ColorRange = { start: 0, end: 0 };

  public setColorRange(pixel: "red" | "green" | "blue", range: ColorRange) {
    if (pixel === "red") {
      this.red = range;
    } else if (pixel === "green") {
      this.green = range;
    } else if (pixel === "blue") {
      this.blue = range;
    }
  }

  protected getStrokeWeight(): number {
    return 2;
  }

  protected getCurrentColor({ start, end }: ColorRange): number {
    const { p, radius, nElements } = this;
    return p.floor(p.map(radius, 0, nElements, start, end));
  }

  protected getFillColor(): string {
    const { p, red, green, blue } = this;
    return p
      .color(
        this.getCurrentColor(red),
        this.getCurrentColor(green),
        this.getCurrentColor(blue)
      )
      .toString();
  }
}
