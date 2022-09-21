import React, { useRef, useEffect } from "react";

const Background = props => {

  const canvasRef = useRef(null);
  const draw = (ctx) => {

    /* ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(100, 100, 50, 50); */

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(130, 130, 50, 50);

    ctx.strokeRect(150, 150, 50, 50);

    ctx.clearRect(130, 130, 80, 20);


  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");


    let animationFrameId

    const render = () => {
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  }, [draw]);

  return (
    <div>
      <canvas
        style={{
          width: 300,
          height: 300,
          border: "1px solid #000",

        }}
        ref={canvasRef}

      ></canvas>
    </div>
  )

};

export default Background;



