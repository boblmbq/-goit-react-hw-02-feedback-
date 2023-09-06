import { Component } from 'react';

class FeadbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <ul>
          <li>
            <button onClick={onLeaveFeedback}>Good</button>
          </li>
          <li>
            <button onClick={onLeaveFeedback}>Neutral</button>
          </li>
          <li>
            <button onClick={onLeaveFeedback}>Bad</button>
          </li>
        </ul>
      </>
    );
  }
}

export default FeadbackOptions;
