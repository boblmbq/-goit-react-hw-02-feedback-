import { Component } from 'react';
import  Notification  from 'components/Notification';
// import css from "./Statistics.module.css"

class Statistics extends Component {
  render() {
    const { good, bad, neutral } = this.props.data;
    const { totalFeadback, positivePercentage } = this.props;

    return (
      <>
        <h2>Statistics</h2>
        {totalFeadback(good, bad, neutral) ? (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeadback(good, bad, neutral)}</li>
            <li>
              Positeve feedback:
              {positivePercentage(good, totalFeadback(good, bad, neutral))}
            </li>
          </ul>
        ) : (
          <Notification message={"There is no statistics yet"} />
        )}
      </>
    );
  }
}

export default Statistics;
