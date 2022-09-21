import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { CTX } from '../../context/Store';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    width: 130,
    height: 180,
    backgroundImage: ` url(data:image/png;base64,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)`,
    background: "#e1e2ed",
    border: "3px solid #000",
    borderRadius: 3,
    padding: 5,
  },
  inerRoot: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 0,
    marginLeft: -5,
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "black",
    height: 8,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "black",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 3,
    borderRadius: 4,
    pointerEvents: 'none'

  },
  rail: {
    height: 3,
    borderRadius: 4,
    pointerEvents: 'none'

  },
})(Slider);

export default function ENV() {

  const classes = useStyles();
  const [appState, updateState] = useContext(CTX);
  let { attack, decay, sustain, release } = appState.envelope;

  const change = (event, newValue) => {

    let envId = event.target.offsetParent.id;
    let envValue = newValue;
    updateState({ type: 'CHANGE_ENV', payload: { envId, envValue } });
    console.log(envId);
    console.log(envValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.inerRoot}>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 12,
            padding: 5,
            margin: 2,
          }}
          gutterBottom
        >
          Attack
        </Typography>

        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          id={"attack"}
          onChange={change}
          defaultValue={attack}
          min={0}
          step={0.01}
          max={1}
        />

      </div>
      <div className={classes.inerRoot}>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 12,
            padding: 5,
            margin: 2,
          }}
          gutterBottom
        >
          Decay
        </Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          id={"decay"}
          onChange={change}
          defaultValue={decay}
          min={0}
          step={0.01}
          max={1}
        />
      </div>
      <div className={classes.inerRoot}>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 12,
            padding: 5,
            margin: 2,
          }}
          gutterBottom
        >
          Sustain
        </Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          id={"sustain"}
          onChange={change}
          defaultValue={sustain}
          min={0}
          step={0.01}
          max={1}
        />
      </div>
      <div className={classes.inerRoot}>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 12,
            padding: 5,
            margin: 2,
          }}
          gutterBottom
        >
          Release
        </Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          id={"release"}
          onChange={change}
          defaultValue={release}
          min={0}
          step={0.01}
          max={1}
        />
      </div>
    </div>
  );
}
