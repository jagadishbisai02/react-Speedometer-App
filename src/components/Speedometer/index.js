// Write your code here
import {Component} from 'react'

import './index.css'

class SpeedoMeter extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBreake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-meter-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="speed-meter-section">
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="range">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons">
            <button
              className="accelerate"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="brake"
              type="button"
              onClick={this.onApplyBreake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
