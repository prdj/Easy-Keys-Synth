import React, {useState} from "react";
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

  const [state, setState] = useState({value: 0})

  let handleChange = (newValue) => {
      setState({value: newValue});
  };

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
/* const useStyles = makeStyles({
    root:{
    width: 60,
    height: 180,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
    background: "#333",
    border: "3px solid #000",
    borderRadius: 3,
    position: "absolute",
    margin: "auto",
    left: "970px",
    top: "290px",
    },
    inerRoot: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 0,
    marginLeft:-2,
    width: "50px",
    height: "50px",
    backgroundColor: "#6b6b6b",
    borderRadius: "50%",
    boxShadow: ' inset 0 3px 5px 2px rgba(255, 105, 135, .3)',
   
    }
})

let state = {value: 25};
let setState

const Filter = () => {
    const classes = useStyles();

    const handleChange = (newValue) => {
       
        console.log(newValue);
      };
    return(
        <div className={classes.root}>

            <div className={classes.inerRoot}>
            <Knob
            inputColor={'blue'}
            fgColor={'black'}
            bgColor={'#6b6b6b'}
            height={50}
            width={50}
            className={classes.inerRoots}
            thickness={1}
            value={state.value}
            onChange={handleChange}></Knob>

            </div>
        </div>
    )
};
export default Filter; */