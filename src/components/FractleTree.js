import React, { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const FractalTree = () => {
  const [angle, setAngle] = useState(Math.PI / 4);
  const [length, setLength] = useState(100);

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.stroke(255);
      p5.noLoop(); // Redraw only when angle or length changes
    };

    p5.draw = () => {
      p5.background(30);

      p5.translate(200, p5.height);
      branch(length);
    };

    const branch = (len) => {
      p5.line(0, 0, 0, -len);
      p5.translate(0, -len);
      if (len > 4) {
        p5.push();
        p5.rotate(angle);
        branch(len * 0.67);
        p5.pop();
        p5.push();
        p5.rotate(-angle);
        branch(len * 0.67);
        p5.pop();
      }
    };

    p5.mouseMoved = () => {
      // Adjust angle based on mouse position
      const newAngle = p5.map(p5.mouseX, 0, p5.width, Math.PI / 2, Math.PI / 16);
      setAngle(newAngle);
      p5.redraw(); // Redraw the canvas when angle changes
    };
  };

  return (
    <div className="fractal-tree-container">
      <ReactP5Wrapper sketch={sketch} />
      <div className="controls">
        <label htmlFor="length">Branch Length:</label>
        <input
          type="range"
          id="length"
          min="10"
          max="200"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <p>Current Angle: {angle.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FractalTree;
