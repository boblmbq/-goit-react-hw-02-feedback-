import { Component } from 'react';
import FeadbackOptions from './FeadbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import { ThemeProvider } from '@emotion/react';

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
      <ThemeProvider
        theme={{
          colors: {
            neutral: '#e3e0cf',
            good: 'green',
            bad: 'red',
          },
          spacing: (value) => {
            return `${value * 4}px`;
          }
        }}
      >
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
      </ThemeProvider>
    );
  }
}
