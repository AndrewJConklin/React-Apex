import React from 'react'

const Card = (props) => {
  return (
    <div className='player-card'>
      <img src='https://media.istockphoto.com/vectors/handsome-young-man-wearing-sunglasses-vector-id812960808' alt='Player Portrait'></img>
      <ul className='stats'>
        <li>Games Played: {props.games}</li>
        <li>Wins: {props.wins}</li>
        <li>Kills: {props.kills}</li>
        <li>Deaths: {props.deaths}</li>
        <li>K/D: {props.kd}</li>
        <li>Damage: {props.damage}</li>
      </ul>
    </div>
  )
}

export default Card