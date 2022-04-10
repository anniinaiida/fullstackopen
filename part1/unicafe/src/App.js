import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th align="left">{text}</th>
      <th align="left">{value}</th>
      </tr>
  )
}

const Statictics = ({ good, neutral, bad }) => {
  if ((good+neutral+bad) !==0)
    return (
      <table>
        <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good+neutral+bad} />
            <StatisticLine text='average' value={(good*1+bad*-1)/(good+neutral+bad)} />
            <StatisticLine text='positive' value={good/(good+neutral+bad)*100+' %'} />
        </tbody>
      </table>
    )
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )   
}

const DisplayTitle = props => <h1>{props.value}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => {
    console.log('good value now', newValue)  // print the new value to console
    setGood(newValue)
  }

  const setNeutralValue = (newValue) => {
    console.log('neutral value now', newValue)  // print the new value to console
    setNeutral(newValue)
  }

  const setBadValue = (newValue) => {
    console.log('bad value now', newValue)  // print the new value to console
    setBad(newValue)
  }

  return (
    <div>
      <DisplayTitle value='give feedback' />

      <Button handleClick={() => setGoodValue(good + 1)} text='good' />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBadValue(bad + 1)} text='bad' />

      <DisplayTitle value='statistics' />

      <Statictics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App