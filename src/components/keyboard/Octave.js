import { arrayNotes } from "./Format";
import styled from "styled-components";
import Note from "../keyboard/Note";
import KeyFunctions from "../keyboard/KeyFunctions";
import React, { useEffect, useContext} from "react";
import { SoundContext } from "../../context/SoundContext";
import { CTX } from "../../context/Store";


// Creating the keyboard
const PianoBody = styled.div`
  left: 11rem;
  top: 550px;
  height: 85px;
  width: 1110px;
  border-radius: 3px;
  background-color:#333366;
  background-image: url(${'data:image/png;base64,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'});
  
`;

const Wrapper = styled.div`
  display: flex;
  top: 17px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

let vco;
let nodes = [];
let activeSynths = [];
const KEYBOARD_KEYS = [
  "a",
  "w",
  "s",
  "e",
  "d",
  "f",
  "t",
  "g",
  "z",
  "h",
  "u",
  "j",
  "k",
  "o",
  "l",
  "p",
  "ö",
  "ä",
];

const Octave = () => {
  // STORE FROM REDUCE
  const [updateState] = useContext(CTX);
  //let { type, frequency, detune } = appState.osc1Settings;
  // SOUND CONTEX
  let {
    waveType,
    volume,
    setKeyPressed,
    setAnalyser,
    setBufferLength,
    setDataArray,
  } = useContext(SoundContext);

  // SETTING UP AUDIO CONTEXT API
  let audioCtx = new AudioContext();

  useEffect(() => {

    // KEY DOWN EVENT 
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.repeat) return;

      //MAPPING KEYBOARD KEYS
      const { key } = e;

      let Index = KEYBOARD_KEYS.indexOf(key);
      if (Index === -1) {
        return;
      }

      const noteAudio = document.getElementsByTagName("button");
      const NoteForClass = noteAudio[Index];
      let lastSynthsPlayed = activeSynths[activeSynths.length - 1];
      if (lastSynthsPlayed > -1) {
        console.log(lastSynthsPlayed["index"]);
      };

      let freq = NoteForClass.value;
      let note = NoteForClass.id;
      let lfoFreq = NoteForClass.value;


      updateState({ type: "MAKE_OSC", payload: { note, freq } });
      updateState({ type: "MAKE_LFO", payload: { lfoFreq } });


      // FILLING ARRAY SYNTH WITH THE OSCILLATOR NODES FOR ALL KEYS
      nodes = [];
      arrayNotes.forEach((item, index) => {
        vco = audioCtx.createOscillator();
        // I create now the volume property on the nodes array
        vco.volume = item.vol;
        vco.index = index++;
        vco.type = item.type;
        vco.frequency.value = item.pitchNumber;
        nodes.push(vco);
        vco.start(0);
      });

      // PLAYING
      activeSynths[Index] = nodes[Index];

      //AMP - MASTER VOLUME CONTROL
      // I use the property volume from nodes array to update/change the volume on the gainNode
      const ampSynth = new GainNode(audioCtx, { gain: activeSynths[Index].volume });
      activeSynths[Index].connect(ampSynth);
      //ampSynth.connect(out);

      // CREATING ANALYSER
      const analyser = audioCtx.createAnalyser();
      activeSynths[Index].connect(analyser);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.minDecibels = -90;
      analyser.maxDecibels = 0;
      analyser.smoothingTimeConstant = 0.2;

      // SENDING REQUEST'S AWAY TO THE VIZUALISER
      setBufferLength(bufferLength);
      setDataArray(dataArray);
      setAnalyser(analyser);

      function playNote() {
        NoteForClass.value.length === 1
          ? NoteForClass.classList.add("activeWhite")
          : NoteForClass.classList.add("activeBlack");
        setKeyPressed(Index.toString());
      }
      if (Index > -1) playNote();
    });

    //KEY UP EVENT 
    document.addEventListener("keyup", (e) => {

      if (e.repeat) return;
      const key = e.key;
      const keyboardKeysIndex = KEYBOARD_KEYS.indexOf(key);
      const noteAudio = document.getElementsByTagName("button");
      const NoteForClass = noteAudio[keyboardKeysIndex];
      let indexMap = keyboardKeysIndex.toString();
      if (!NoteForClass || !waveType) return;

      let Index = KEYBOARD_KEYS.indexOf(key);
      if (Index === -1) {
        return;
      }

      let freq = NoteForClass.value;
      let note = NoteForClass.id;
      let lfoFreq = NoteForClass.value;

      updateState({ type: "KILL_OSC", payload: { note, freq } });
      updateState({ type: "KILL_LFO", payload: { lfoFreq } })

      function stopNote() {
        NoteForClass.classList.remove("activeWhite") ||
          NoteForClass.classList.remove("activeBlack");
        activeSynths[indexMap].stop();
        delete activeSynths[indexMap];
        nodes.forEach((node) => {
          node.stop();
        });
      }
      if (keyboardKeysIndex > -1) stopNote();
    });
  }, []);

  useEffect(() => {
    //console.log({ volume });
  }, [volume]);


  return (
    <div className="octave">

      <PianoBody>
        <Wrapper>
          <div>
            {arrayNotes.map((element) => (
              <Note
                note={element.note}
                color={element.color}
                pitchNumber={element.pitchNumber}
                number={element.number}
              />
            ))}
          </div>
        </Wrapper>
        <KeyFunctions></KeyFunctions>
      </PianoBody>

    </div>
  );
};

export default Octave;



/* 
  // MIDIAccess called whenever a new MIDI port is added or an existing port changes state.
  navigator.requestMIDIAccess().then((midiAccess) => {
    Array.from(midiAccess.inputs).forEach((input) => {
      input[1].onmidimessage = (msg) => {
        setCommand(msg.data[0]);
        setMidiNote(msg.data[1]);
        setVelocity(msg.data.length > 2 ? msg.data[2] : 0);
      
      };
    });
  });

  function noteOn(){
    if(command === 144){
      activeSynthsMidi[midiNote - 20] = synthForMidi[midiNote - 20];
      console.log(activeSynthsMidi)
      console.log('note on');
    }
  }

  function noteOff () {
    if (command === 128) {
      console.log('noteOff');
    }
  }

  useEffect(()=> {
   noteOn()
   noteOff()
  }, [midiNote, command])
  
  
  // FILLING ARRAY SYNTH WITH THE OSCILLATOR NODES FOR ALL KEYS
  synthForMidi = [];
  
  synthForMidi.forEach((item, index) => {
    vco = audioCtx.createOscillator();
    vco.volume = item.vol;
    vco.index = index++;
    vco.type = item.type;
    vco.frequency.value = item.pitchNumber;
    synthForMidi.push(vco);
    vco.start();
  });

  activeSynthsMidi[midiNote - 20] = synthForMidi[midiNote - 20];

  console.log(activeSynthsMidi);

  navigator.requestMIDIAccess().then(function (midiAccess) {
    // Get lists of available MIDI controllers
    const inputs = midiAccess.inputs.values();
    const outputs = midiAccess.outputs.values();

    midiAccess.onstatechange = function (e) {
      // Print information about the (dis)connected MIDI controller
      console.log(e.port.name, e.port.manufacturer, e.port.state);
    };
  });

  // MOUSE EVENT
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      const click = e.target.value;
      function playNote() {
        let IndexClick = arrayNotes.findIndex((x) => x.note === click);
        //setKeyPressed(IndexClick.toString());
      }
      playNote();
    });
  }, []);

   */