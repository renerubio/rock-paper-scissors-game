import React, { useState } from 'react';
import './RPS_Game.scss';

const RPS_Game = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [pcSelectedValue, setPcSelectedValue] = useState(null);

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
      userMove: `Your chose: ${txtGame.options[selectedValue]}`,
      pcMove: `PC move: ${txtGame.options[pcSelectedValue]}`,
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

    if (selectedValue === pcSelectedValue) return resultMessage(txtGame.draw)

    if (selectedValue === VALUES_GAME.ROCK) {
      if (pcSelectedValue === VALUES_GAME.PAPER)
        return userLost()
      if (pcSelectedValue === VALUES_GAME.SCISSORS)
        return userWin()
    }

    if (selectedValue === VALUES_GAME.PAPER) {
      if (pcSelectedValue === VALUES_GAME.ROCK)
        return userWin()
      if (pcSelectedValue === VALUES_GAME.SCISSORS)
        return userLost()
    }

    if (selectedValue === VALUES_GAME.SCISSORS) {
      if (pcSelectedValue === VALUES_GAME.ROCK)
        return userLost()
      if (pcSelectedValue === VALUES_GAME.PAPER)
        return userWin()
    }
  };

  const handleButtonClick = value => () => {
    setSelectedValue(value);
    setPcSelectedValue(pcMove);
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
      {selectedValue !== null && (
        <div>
          {getResultMessage()}
        </div>
      )}
    </div>
  );
};

export default RPS_Game;
