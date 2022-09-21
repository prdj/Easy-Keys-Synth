export default class Osc {
    constructor (actx, label, frequency, detune, envelope, connection) {
        this.envelope = envelope || {
            attack: 0.005,
            decay: 0.1,
            sustain: 0.9,
            release: 0.1,
        };
        this.actx = actx;
        this.osc= actx.createOscillator();
        this.osc.frequency.value = frequency;
        this.osc.detune.value = detune;
        this.osc.type = label;
        this.gateGain = actx.createGain();
        this.gateGain.gain.value = 0;

        this.osc.connect(this.gateGain);
        this.gateGain.connect(connection);
        this.easing = 0.005;
        this.osc.start();
        this.start();
    }
    start(){
        let { currentTime } = this.actx;
        this.gateGain.gain.cancelScheduledValues(currentTime);
        this.gateGain.gain.setValueAtTime(0, currentTime + this.easing);
        this.gateGain.gain.linearRampToValueAtTime(1, currentTime + this.envelope.attack + this.easing);
        this.gateGain.gain.linearRampToValueAtTime(this.envelope.sustain, currentTime + this.envelope.attack + this.envelope.decay + this.easing);
        
    }
    stop(){
        let { currentTime } = this.actx;
        this.gateGain.gain.cancelScheduledValues(currentTime);
        this.gateGain.gain.setTargetAtTime(0, currentTime, this.envelope.release + this.easing);
        setTimeout(()=>{
            this.osc.disconnect();
        }, 10000);

    }
}