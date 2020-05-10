import p5 from "p5";
import Spiral from "./Spiral";
import CircleSpiral from "./CircleSpiral";

function sketch(p: p5) {
  let spiral: Spiral;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);

    const circleSpiral: CircleSpiral = new CircleSpiral(p, 375, 2.962);

    spiral = circleSpiral;
  };

  p.draw = () => {
    p.background(255);
    p.translate(p.width / 2, p.height / 2);

    spiral.draw();
  };
}

new p5(sketch);
