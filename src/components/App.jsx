import { Component } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = elem => {
    return this.setState(prev => ({
      [elem]: prev[elem] + 1,
    }));
  };
  countTotalFeedback = (...d) => {
    return d.reduce((acc, item) => {
      return acc + item;
    });
  };
  countPositiveFeedbackPercentage = () => {
    const { bad, good, neutral } = this.state;
    return `${Math.floor(
      (good / this.countTotalFeedback(good, bad, neutral)) * 100
    )}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeadbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />
        <h2>Statistics</h2>
        {this.countTotalFeedback(good, bad, neutral) ? (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.countTotalFeedback(good, bad, neutral)}</li>
            <li>
              Positeve feedback:
              {this.countPositiveFeedbackPercentage()}
            </li>
          </ul>
        ) : (
          <Notification message={'There is no statistics yet'} />
        )}
      </Section>
    );
  }
}
