import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
    width: 60,
    height: 180,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
    background: "#e1e2ed",
    border: "3px solid #000",
    borderRadius: 3,

    },
    
    knob: {
    flexDirection: "row",
    padding: -1,
    position: 'relative',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#B1B1B1',
    border: '2px solid #aef4f5',
    boxSizing: 'border-box',
    borderRadius: '60%',
    },
    imprintKnob: {
    position: 'relative',
    width: 26,
    height: 5,
    background: '#747474',
    borderRadius: 4,
    }
})


const Filter   = () =>{
  const classes = useStyles();

 // const [setState] = useState({value: 0})

 /*  let handleChange = (newValue) => {
      setState({value: newValue});
  }; */

    return (
        <div className={classes.root}>
            <div className={classes.knob}>
                <div className={classes.imprintKnob}>

                </div>
            </div>

            <div className={classes.knob}>
                <div className={classes.imprintKnob}>
                    
                </div>
            </div>

            <div className={classes.knob}>
                <div className={classes.imprintKnob}>
                    
                </div>
            </div>
     
      
      
      </div>
    );
  
}
export default Filter;
