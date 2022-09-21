import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useCanvas from "./useCanvas";


const useStyles = makeStyles({
    root: {
        display:'flex',
        zIndex: 9,
        position: 'absolute',
    }
})

const Grille = (props) => {
    const classes = useStyles();
    const { draw, ...rest } = props;
    const canvasRef = useCanvas(draw);

    return (
        <div className={classes.root}>
            <canvas ref={canvasRef} {...rest}
                style={{
                    width: 200,
                    height: 180,
                    opacity: 0.7,
                }} />

        </div>
    )
};

export default Grille;