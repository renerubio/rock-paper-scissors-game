import React, { useState } from 'react';
import './RPS_Game.scss';

const RPS_Game = () => {
  const [userValue, updateUserValue] = useState(null);
  const [pcValue, updatePcValue] = useState(null);

  const VALUES_GAME = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
  };

  const pcMove = () => Math.floor(Math.random() * 3);

  const txtGame = {
    userWin: 'You win! 😎 ',
    userLost: 'You lost 😭 ',
    draw: 'Draw 🤝 ',
    options: ['Rock 🗿', 'Paper 📰', 'Scissors ✂️'],
  }

  const getResultMessage = () => {

    const txtGameMoves = {
      userMove: `Your chose: ${txtGame.options[userValue]}`,
      pcMove: `PC move: ${txtGame.options[pcValue]}`,
    };

    const resultMessage = (winner) => {
      return <p>
        {winner}<br />
        {txtGameMoves.userMove}<br />
        {txtGameMoves.pcMove}
      </p>
    };

    const userWin = () => (resultMessage(txtGame.userWin));
    const userLost = () => (resultMessage(txtGame.userLost));

    const getWinner = (userMove, pcMove) => {
      if (userMove === pcMove) return resultMessage(txtGame.draw);
      return {
        0: pcMove === VALUES_GAME.SCISSORS ? userWin() : userLost(),
        1: pcMove === VALUES_GAME.ROCK ? userWin() : userLost(),
        2: pcMove === VALUES_GAME.PAPER ? userWin() : userLost(),
      }[userMove]
    };

    return getWinner(userValue, pcValue);
  };

  const handleButtonClick = value => () => {
    updateUserValue(value);
    updatePcValue(pcMove);
  }

  return (
    <div className="App">
      <h2>Select your option</h2>
      <button key={0} type="button" onClick={handleButtonClick(0)}>
        {txtGame.options[0]}
      </button>
      <button key={1} type="button" onClick={handleButtonClick(1)}>
        {txtGame.options[1]}
      </button>
      <button key={2} type="button" onClick={handleButtonClick(2)}>
        {txtGame.options[2]}
      </button>
      {userValue !== null && (
        <div>
          {getResultMessage()}
        </div>
      )}
    </div>
  );
};

export default RPS_Game;
