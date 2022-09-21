import { useRef, useEffect } from 'react'


const useCanvas = props => {

  let canvasRef = useRef(null)

  let draw
  let animationFrameId


  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')


    const draw = (ctx, canvas) => {


      ctx.strokeStyle = 'black';
      var w = canvas.width;
      var h = canvas.height;

      for (let i = 1; i < 22; i++) {
        ctx.beginPath();
        ctx.moveTo(0, h / 22 * i);
        ctx.lineTo(w, h / 22 * i);
        ctx.stroke();
      }

      for (let i = 1; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(w / 8 * i, 0);
        ctx.lineTo(w / 8 * i, h);
        ctx.stroke();
      }

      ctx.restore();
    };

    const render = () => {
      let frameCount = 0
      frameCount++
      draw(context, canvas)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  }, [draw])

  return canvasRef
}

export default useCanvas