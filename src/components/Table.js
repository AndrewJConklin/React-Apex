import React from 'react'

const Table = (props) => {
  return (
    <table className='game-stats'>
      <thead>
        <th>Player</th>
        <th>Kills</th>
        <th>Damage</th>
        <th>Revives</th>
        <th>Place</th>
      </thead>
      <tr>
        <td>{props.player1}</td>
        <td>{props.player1kills}</td>
        <td>{props.player1damage}</td>
        <td>{props.player1revives}</td>
        <th>{props.place}</th>
      </tr>
      <tr>
        <td>{props.player2}</td>
        <td>{props.player2kills}</td>
        <td>{props.player2damage}</td>
        <td>{props.player2revives}</td>
        <th>{props.place}</th>
      </tr>
      <tr>
        <td>{props.player3}</td>
        <td>{props.player3kills}</td>
        <td>{props.player3damage}</td>
        <td>{props.player3revives}</td>
        <th>{props.place}</th>
      </tr>
    </table>
  )
}

export default Table