import React, { createContext, useState, useRef } from "react";
import { arrayNotes } from "../components/keyboard/Format";

// CONTEXT
// PROVIDER


export const SoundContext = createContext(); // like createStore in Redux

const SoundProvider = (props) => {

  let iWantToGetWrapped = props.children; // app component
    
  const [command, setCommand] = useState();
  const [midiNote, setMidiNote] = useState();
  const [velocity, setVelocity] = useState();
  const [waveType, setWaveType] = useState(arrayNotes);
  const [bufferLength, setBufferLength] = useState();
  const [dataArray, setDataArray] = useState();
  const [analyser, setAnalyser] = useState();
  const [volume, setVolume] = useState(arrayNotes);
  const [sound, setSound] = useState();
  const [keyPressed, setKeyPressed] = useState();
  const canvasRef = useRef(null);
  const contextRef = useRef(null);



  let sharedData = {
    velocity,
    setVelocity,
    midiNote,
    setMidiNote,
    command,
    setCommand,
    waveType,
    setWaveType,
    bufferLength,
    setBufferLength,
    dataArray,
    setDataArray,
    canvasRef,
    contextRef,
    analyser,
    setAnalyser,
    sound,
    setSound,
    volume,
    setVolume,
    keyPressed,
    setKeyPressed,
  };

  return (
    <SoundContext.Provider value={sharedData}>
      {iWantToGetWrapped}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
