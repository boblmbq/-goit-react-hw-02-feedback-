import { Component } from 'react';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';

export class App extends Component {
  render() {
    return (
      <div>
        <FeedbackButtons />
        <Statistics />
      </div>
    );
  }
}
