import { Component } from 'react';

class FeadbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        <ul>
          {options.map(el => (
            <li key={el}>
              <button onClick={()=> onLeaveFeedback(el)}>
                {el.charAt(0).toUpperCase() + el.slice(1)}
                {/* можна було й зробити через css але захотілось так */}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default FeadbackOptions;
