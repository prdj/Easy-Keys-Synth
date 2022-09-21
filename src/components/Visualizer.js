import React, { useRef, useEffect, useContext } from "react";
import { SoundContext } from "../context/SoundContext";
import { makeStyles } from "@material-ui/core/styles";
import Grille from "./Grille";


const useStyles = makeStyles({
  root: {
    display: 'flex',

  }
})

const Canvas2 = (props) => {

  let { analyser, dataArray, bufferLength } = useContext(SoundContext);

  const classes = useStyles();

  const canvasRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx) => {
    if (!analyser) {
      return;
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clear canvas
   
    analyser.getByteFrequencyData(dataArray);

    let barWidth = (ctx.canvas.width / bufferLength) * 4.5;
    let barHeight;
    let x = 0;
    let lastRender = Date.now();

    for (let i = 0; i < bufferLength; i++) {
      let delta = Date.now() - lastRender;
      x += delta;
      barWidth += delta;
      barHeight += delta;
      barHeight = dataArray[i];
      ctx.fillStyle = "rgb( " + (barHeight + 200) + ",270,0)";
      ctx.fillRect(
        x,
        ctx.canvas.height - barHeight / 2,
        barWidth / 1.6,
        barHeight
      );
      x += barWidth + 1;
     
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
  
    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
    
  }, [draw]);

  return (
   <div className={classes.root}>
    <Grille></Grille>
    <canvas
      style={{
        display:"flex",
        background: "#9899a3",
        width: 200,
        height: 180,
        zIndex: 1,
        border: "3px solid #000",
        
      }}
      ref={canvasRef}
    />
  </div>
  );
};

export default Canvas2;
