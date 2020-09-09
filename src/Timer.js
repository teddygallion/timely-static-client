import React from 'react';
import './Timer.css';

const WORK_CYCLE_DURATION_SECONDS = 25 * 60;
const BREAK_CYCLE_DURATION_SECONDS = 5 * 60;
const LONG_BREAK_DURATION_SECONDS = 30 * 60;

export default class Timer extends React.Component{
	constructor(props){
		super(props)
    // Timer starts off with 25min
    // tip: keep as little state as possible. Derive other values u might need at render time.
		this.state = {
			'seconds' : WORK_CYCLE_DURATION_SECONDS,
			'cycle': 'work',
      		'completedWorkCycles' : 0
		}
	}
  
  tick() {
    // Check if timer hit 0 - that means we need to switch cycles
    if(this.state.seconds === 0){
      // If im on the work cycle, then...
      if(this.state.cycle === "work"){
        if(this.state.completedWorkCycles === 3){
          // We finished 3 work cycles! time for a long break
          alert('')
          this.setState({
            seconds: LONG_BREAK_DURATION_SECONDS,
            cycle : 'long break',
            completedWorkCycles : 0
          })
        }
        else{
          // We didnt hit 3 work cycles yet, so short break for you
          this.setState({
            seconds : BREAK_CYCLE_DURATION_SECONDS,
            cycle : 'break',
            completedWorkCycles: this.state.completedWorkCycles + 1
          })
        }
      }
      
      // If im on the break cycle, then....
      else{
        this.setState({
          seconds: WORK_CYCLE_DURATION_SECONDS,
          cycle : 'work'
        })
      }
      //
    }
    else {
      // Advance the timer by 1 second
      this.setState({ seconds: this.state.seconds - 1});
    }
  }
  
  startTimer(){
    //counts down by seconds
    setInterval(
      () => this.tick(),
      10
    );
  }

  /**
   * 320 seconds -> 5:20
   * 
   * String(45) -> '45'
   */
  formatDuration() {
      let minutes = Math.floor(this.state.seconds / 60);
      let seconds = this.state.seconds % 60;
      seconds = String(seconds).padStart(2, '0');
      return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="Timer">
      <h2> A Timer </h2>
      <p> duration: {this.formatDuration()}</p>
      <p> trips around the sun : {this.state.completedWorkCycles} </p>
      <button onClick={() => this.startTimer()}> start </button>
      </div>
    );
  }
}
