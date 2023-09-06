import { Component } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = evt => {
    const elem = evt.target.innerHTML.toLowerCase();
    return this.setState(prev => ({
      [elem]: prev[elem] + 1,
    }));
  };
  countTotalFeedback = (...d) => {
    return d.reduce((acc, item) => {
      return acc + item;
    });
  };
  countPositiveFeedbackPercentage = (positive, total) => {
    return `${Math.floor((positive / total) * 100)}%`;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeadbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          data={this.state}
          totalFeadback={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}
