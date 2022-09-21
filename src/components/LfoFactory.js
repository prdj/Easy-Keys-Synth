export default class Lfo {
    constructor (actx, rate, delay, lfoVol, lfoLable, lfoFreq, envelope, connection) {
        this.envelope = envelope || {
            attack: 0.005,
            decay: 0.1,
            sustain: 0.9,
            release: 0.1,
        };
        this.delay= delay;
        this.lfoVol = lfoVol
        this.actx = actx;
        this.lfo= actx.createOscillator();
        this.lfo.type = lfoLable;
        this.lfo.frequency.value= rate;
        this.lfoGateGain= actx.createGain();
        this.lfoGateGain.gain.value = lfoVol;
        this.wetOut = actx.createGain();

        this.lfoDelay = actx.createDelay(5.0);
        this.lfoDelay.delayTime.value = delay;
        this.feedback = actx.createGain();
        this.feedback.gain.value = 0.3;

        this.filter = actx.createBiquadFilter();
        this.filter.type = "lowpass";
        this.filter.frequency.value = 2000;

        this.lfo.connect(this.filter);
        this.lfo.connect(this.lfoGateGain); 

        this.filter.connect(this.lfoDelay);
        this.lfoDelay.connect(this.feedback);
        this.feedback.connect(this.filter);
     
        this.lfoDelay.connect(this.wetOut);
        this.wetOut.connect(connection);
        this.lfoGateGain.connect(connection);

        this.easing = 0.005;

        this.start();
    }
    start(){
        let { currentTime } = this.actx;
        this.lfoGateGain.gain.cancelScheduledValues(currentTime);
        this.lfoGateGain.gain.setValueAtTime(0, currentTime + this.easing);
        this.lfoGateGain.gain.linearRampToValueAtTime(this.lfoVol, currentTime + this.envelope.attack + this.easing);
        this.lfoGateGain.gain.linearRampToValueAtTime(this.envelope.sustain, currentTime + this.envelope.attack + this.envelope.decay + this.easing);
  }
    stop(){
        let { currentTime } = this.actx;
        this.lfoGateGain.gain.cancelScheduledValues(currentTime);
        this.lfoGateGain.gain.setTargetAtTime(0, currentTime, this.envelope.release + this.easing);
        setTimeout(()=>{
            this.lfo.disconnect();
        }, 1000);

    }
    

}