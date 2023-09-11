import { Component } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Section from './Section';
import Statistics from './Statistics';

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
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.floor((good / this.countTotalFeedback()) * 100)}%`;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeadbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />
        <Statistics
          totalFeadback={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          data={this.state}
        />
      </Section>
    );
  }
}
