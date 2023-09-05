import { Component } from 'react';
// import css from "./Statistics.module.css"

class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad</li>
          <li>Total:</li>
          <li>Positeve feedback:</li>
        </ul>
      </>
    );
  }
}

export default Statistics;
