import { Component } from 'react';

class FeedbackButtons extends Component {
  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
      </>
    );
  }
}

export default FeedbackButtons;
