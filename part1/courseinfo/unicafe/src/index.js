import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => <h1>{title}</h1>;

const Statistics = ({ data }) => {
  return (
    <>
      {data[0].value === 0 ? (
        <p>No Feedback given.</p>
      ) : (
        <div>
          {data.map((value) => (
            <p>
              {value.name} {value.value}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [total, setTotal] = useState(0);

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  //sent to statistics
  const data = [
    {
      name: 'Good',
      value: good
    },
    {
      name: 'Neutral',
      value: neutral
    },
    {
      name: 'Bad',
      value: bad
    },
    {
      name: 'Total',
      value: total
    }
  ];

  const goodClick = () => {
    setTotal(total + 1);
    setGood(good + 1);
  };

  const neutralClick = () => {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setTotal(total + 1);
    setBad(bad + 1);
  };

  return (
    <>
      <Header title='Give Feedback' />
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <h3>Statistics</h3>
      <Statistics data={data} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
