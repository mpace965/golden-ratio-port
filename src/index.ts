import p5 from "p5";
import Spiral from "./Spiral";
import CircleSpiral from "./CircleSpiral";
import SineScalableCircleSpiral from "./SineScalableCircleSpiral";
import SineColorScaleCircleSpiral from "./SineColorScaleCircleSpiral";

function sketch(p: p5) {
  let spiral: Spiral;
  const speed = 2.962;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);

    const circleSpiral: CircleSpiral = new CircleSpiral(p, 375, speed);
    const ssc: SineScalableCircleSpiral = new SineScalableCircleSpiral(
      p,
      800,
      speed,
      15,
      60,
      3
    );
    const sccs = makeSineColorScaleCircleSpiral();
    spiral = sccs;
  };

  p.draw = () => {
    p.background("#00f");
    p.translate(p.width / 2, p.height / 2);

    spiral.draw();
  };

  p.mousePressed = () => {
    let fs = p.fullscreen();
    p.fullscreen(!fs);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    spiral = makeSineColorScaleCircleSpiral();
  };

  function makeSineColorScaleCircleSpiral(): SineColorScaleCircleSpiral {
    const nElements =
      (p.windowWidth >= p.windowHeight
        ? p.windowWidth / 2
        : p.windowHeight / 2) + 200;

    const sccs = new SineColorScaleCircleSpiral(p, nElements, speed, 21, 55);
    sccs.setColorRange("red", { start: 255, end: 255 });
    sccs.setColorRange("green", { start: 255, end: 127 });

    return sccs;
  }
}

new p5(sketch);
