import React, { useContext, useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from '@mdi/react';
import { mdiSawtoothWave } from '@mdi/js';
import { mdiSineWave } from '@mdi/js';
import { mdiSquareWave } from '@mdi/js';
import { mdiTriangleWave } from '@mdi/js';


import { CTX } from '../context/Store';

const useStyles = makeStyles({
  root: {
    width: 270,
    height: 180,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly", 
    alignContent: "center",
    background: "#e1e2ed",
    backgroundImage:` url(data:image/png;base64,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)`,
    border: "3px solid #000",
    borderRadius: 3,

  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: 160,
    width: 40,
    padding: 5,
    left: 35,
    marginTop:4,
    borderRadius: 3,
  },
  inerRoot: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#e1e2ed",
    padding: 5,
    marginLeft: 0,
    border: "2px solid #000",
    borderRadius: 3,
  },

});

export default function LFO() {

  const [appState, updateState] = useContext(CTX);
  let {rate, delay, lfoVol, lfoLabel} = appState.lfoSettings;
  
  const classes = useStyles();

  const handleChange = (event, newValue) => {

    let {value, name} = event.target
    let lfoNewLable = value;
    let lfoLableId = name;
    console.log(lfoLableId)
    console.log(lfoNewLable)

    let lfoId = event.target.offsetParent.id || lfoLableId;
    let lfoValue = Number(newValue) || lfoNewLable;

    updateState({ type: 'CHANGE_LFO', payload: { lfoId, lfoValue }});
    console.log(lfoId);
    console.log(lfoValue); 
  };


  return (
    <div>
     <div className={classes.root}>
      <FormControl component="fieldset">       
        <RadioGroup
            aria-label="gender"
            name="lfoLabel"
            value= {lfoLabel}
            onClick={handleChange}
            style={{
            backgroundColor: "",
            marginLeft:1,
          }} 
          >
            <FormControlLabel 
              value="sine" 
              control={<Radio 
              color ="primary"/>} 
              label=""
            />
  
            <FormControlLabel 
              value="square" 
              control={<Radio />} 
              label="" 
            />
  
            <FormControlLabel
              value="triangle"
              control={<Radio />}
              label=""
            />
            <FormControlLabel
              value="sawtooth"
              control={<Radio />}
              label=""
            />
            
        </RadioGroup>
      </FormControl>
  
        <div className={classes.icons}>
        <Icon path={mdiSineWave}
                size={1}
        />
        <Icon path={mdiSquareWave}
                size={1}
        />
        <Icon path={mdiTriangleWave}
                size={1}
        />
        <Icon path={mdiSawtoothWave}
                size={1}
        />
        </div>

      <div className={classes.inerRoot}>
        <Grid
          container
          style={{
            margin: 0,
            width: 0,
          }}
          spacing={2}
        >
          <Grid item xs>
            <Slider
              style={{
                height: 100,
                padding: "0 10px",
                color: "black",
              }}
              id = "rate"
              orientation="vertical"
              value={rate}
              valueLabelDisplay="auto"
              onChange={handleChange}
              aria-labelledby="vertical-accessible-slider"
              min={0.01}
              step={0.1}
              max={10}
            />
          </Grid>
        </Grid>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 13,
            padding: 3,
            margin: 5,
          }}
          id="vertical-slider"
          gutterBottom
        >
          Rate
        </Typography>
      </div>
      <div className={classes.inerRoot}>
        <Grid
          container
          style={{
            margin: 0,
            width: 39,
          }}
          spacing={2}
        >
          <Grid item xs>
            <Slider
              style={{
                height: 100,
                padding: "0 10px",
                color: "black",
              }}
              id = "delay"
              orientation="vertical"
              value={delay}
              valueLabelDisplay="auto"
              onChange={handleChange}
              aria-labelledby="vertical-accessible-slider"
              min={0}
              step={0.1}
              max={5.0}
            />
          </Grid>
        </Grid>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 13,
            padding: 3,
            margin: 5,
          }}
          id="vertical-slider"
          gutterBottom
        >
          Delay
        </Typography>
      </div>
      <div className={classes.inerRoot}>
        <Grid
          container
          style={{
            margin: 0,
            width: 39,
          }}
          spacing={2}
        >
          <Grid item xs>
            <Slider
              style={{
                height: 100,
                padding: "0 10px",
                color: "black",
              }}
              id = "lfoVol"
              orientation="vertical"
              value={lfoVol}
              valueLabelDisplay="auto"
              onChange={handleChange}
              aria-labelledby="vertical-accessible-slider"
              min={0.01}
              step={0.05}
              max={1}
            />
          </Grid>
        </Grid>
        <Typography
          style={{
            fontFamily: "'Bayon', sans-serif",
            fontSize: 13,
            padding: 3,
            margin: 5,
          }}
          id="vertical-slider"
          gutterBottom
        >
          Amt
        </Typography>
      </div>

      </div>

    </div>
    
  );
}
