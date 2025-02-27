import React, {Component} from 'react';
const instrument = await import('digital_instruments');

class Instrument extends Component {
    constructor(props) {
        super(props);
        this.state = {handles: [], test: "TEST"};
    }

    startBeep = () => {
        this.state.handles.push(instrument.beep());
    }
    
    stopBeep = () => {
        if(this.state.handles.length > 0) {
            let handle = this.state.handles.pop();
            handle.free()
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.startBeep}>Start</button>
                <button onClick={this.stopBeep}>Stop</button>
            </div>
        );
    }
} export default Instrument;