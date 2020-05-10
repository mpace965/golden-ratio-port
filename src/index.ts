import p5 from "p5";
import Spiral from "./Spiral";
import CircleSpiral from "./CircleSpiral";
import SineScalableCircleSpiral from "./SineScalableCircleSpiral";

function sketch(p: p5) {
  let spiral: Spiral;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);

    const circleSpiral: CircleSpiral = new CircleSpiral(p, 375, 2.962);
    const ssc: SineScalableCircleSpiral = new SineScalableCircleSpiral(
      p,
      800,
      2.962,
      15,
      60,
      3
    );

    spiral = ssc;
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);

    spiral.draw();
  };
}

new p5(sketch);
