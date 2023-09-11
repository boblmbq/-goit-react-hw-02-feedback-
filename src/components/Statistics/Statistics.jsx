import Notification from 'components/Notification';
// import css from "./Statistics.module.css"

const Statistics = props => {
  const { totalFeadback, positivePercentage, data } = props;

  return (
    <>
      <h2>Statistics</h2>
      {totalFeadback ? (
        <ul>
          {Object.keys(data).map(item => {
            const bigWritten = item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <li key={item}>
                {bigWritten}: {data[item]}
              </li>
            );
          })}
          <li>Total: {totalFeadback}</li>
          <li>
            Positeve feedback:
            {positivePercentage}
          </li>
        </ul>
      ) : (
        <Notification message={'There is no statistics yet'} />
      )}
    </>
  );
};

export default Statistics;
