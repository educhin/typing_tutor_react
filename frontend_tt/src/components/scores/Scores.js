// import React from 'react';

// class Scores extends React.Component {
//     render() {
//         return <h1>Scores function goes here.</h1>
//     }
// }

// export default Scores;

import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllScores } from './scoresSlice'

export const Scores = () => {
  const scores = useSelector(selectAllScores)

  const renderedScores = scores.map(score => (
    <div className="score-line" key={score.position}>
      <p>{score.name}</p>
      <p>{score.wpm}</p>
    </div>
  ))

  return (
    <section>
      <h2>High Scores!</h2>
      {renderedScores}
    </section>
  )
}

export default Scores