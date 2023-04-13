import React, { Component } from 'react';
import moment, { duration } from 'moment';
import '../../Styles/CountDown.css';

export default class Countdown extends Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  addZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  }
  setCountdown() {
    const futureDate = moment(this.props.futureDate);
    const today = moment();
    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    this.setState({
      days: days,
      hours: hours,
      mins: mins,
      secs: secs,
    });
  }

  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="countdown">
        {Object.keys(this.state).map((key, i) => (
          <div className="countdown-segment">
            <span className="countdown-segment-number">
              {this.addZeros(this.state[key])}
            </span>
            <span className="countdown-segment-caption">
              {key.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
