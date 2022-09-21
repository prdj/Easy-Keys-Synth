import React from 'react';
import Osc from '../components/keyboard/OscFactory';
import Lfo from '../components/keyboard/LfoFactory';

let actx = new AudioContext();
let out = actx.destination;


let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();
filter.type= 'lowpass';
filter.frequency.value = 2200;

filter.connect(gain1);
gain1.connect(out);



 
const CTX = React.createContext();
export { CTX };

let nodes = [];
let lfoNodes = [];
 

export function reducer(state, action){
    let {note, freq, value, envId, envValue, lfoId, lfoValue, lfoFreq, lfoNewLable} = action.payload || {}; 
    switch (action.type) {
        case "MAKE_OSC":
            const newOsc = new Osc(actx, 
                state.osc1Settings.label, 
                freq, 
                state.osc1Settings.detune, 
                state.envelope, 
                gain1);
            nodes.push(newOsc)
            console.log('make osc, note and freq:', note, freq);
            return {...state};
            break;
        case "KILL_OSC":
            let newNodes = [];
            nodes.forEach(node =>{
                if(Math.round(node.osc.frequency.value) === Math.round(freq)){
                    node.stop();
                } else {
                    newNodes.push(node);
                }
            });
            nodes = newNodes;
            console.log('kill osc, note and freq:', note, freq);
            return {...state};
            break;
        case "MAKE_LFO":
            const newLfo = new Lfo(actx, 
                state.lfoSettings.rate, 
                state.lfoSettings.delay,
                state.lfoSettings.lfoVol,
                state.lfoSettings.lfoLabel,
                lfoFreq, 
                state.envelope,
                gain1);
            lfoNodes.push(newLfo);
            console.log('make lfo, note and freq:',lfoFreq);
            return {...state};
            break;
        case "KILL_LFO":
            let newLfoNodes = [];
            lfoNodes.forEach(node =>{
                if(node.lfo.note === note){
                    node.stop();
                } else {
                    newLfoNodes.push(node);
                }
            });
            lfoNodes = newLfoNodes;
            console.log('kill lfo, note and freq:', lfoFreq);
            return {...state};
            break;    
        case 'CHANGE_OSC1_LABEL':
            return {...state, osc1Settings: {...state.osc1Settings, label : value }}; 
            break;
        case 'CHANGE_LFO':
            return {...state, lfoSettings: {...state.lfoSettings, [lfoId] : lfoValue}};
            break;
        case 'CHANGE_LFO_LABEL':
            return {...state, lfoSettings:{...state.logSettngs, lfoLabel:lfoNewLable}};
        case 'CHANGE_MASTER_VOLUME':
            return {...state};
            break;
        case 'CHANGE_ENV':
            console.log()
        return {...state, envelope: {...state.envelope,  [envId]: Number(envValue)}};
        default:
            console.log('reducer error.action:', action);
            return {...state};
            break;
    }
};

export default function Store (props){
    const stateHook = React.useReducer(reducer, {
        masterSetting: {
            masterVol: 0,
        },
        osc1Settings: {
            detune: 0,
            label: 'sine',
        },
        lfoSettings: {
            lfoVol: 0.5,
            rate: 0.5,
            delay: 0.2,
            lfoLabel: 'triangle',
        },
        envelope: {
            attack: 0.4,
            decay: 0.1,
            sustain: 0.9,
            release: 0.1,
        },
    });
    return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}