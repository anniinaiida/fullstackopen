import { useState } from 'react'

const DisplayTitle = props => <h1>{props.value}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const [max, setMaxIndex] = useState(0)


  const setRandomValue = () => {
    let random = Math.floor((Math.random() * anecdotes.length))
    console.log('value now', random)  // print the new value to console
    setSelected(random)
  }

  const setPointsValue = () => {
    const copy = [...points]
    copy[selected] += 1
    console.log('array now', copy)  // print the new value to console
    setPoints(copy)
    setMaxIndex(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <DisplayTitle value='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={setPointsValue} text='vote' />
      <Button handleClick={setRandomValue} text='next anecdote' />

      <DisplayTitle value='Anecdote with most votes' />
      <p>{anecdotes[max]}</p>
      <p>has {points[max]} votes</p>
    </div>
  )
}

export default App