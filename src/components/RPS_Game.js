/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './RPS_Game.scss';

const ButtonsList = ({ textButton, handleClick, option }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const buttonClass = () => ('button ' + (hovered ? 'is-link' : 'is-primary'));
  return (

    <div className="column is-one-fifth">
      <button
        className={buttonClass()}
        key={option}
        type="button"
        onClick={handleClick}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}>
        {textButton}
      </button>
    </div >
  )
};


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
    <div className="section has-background-white-ter">
      <h2 className="title">Select your option</h2>
      <div className="columns">
        {
          Object.keys(VALUES_GAME).map((key) => {
            return (
              <ButtonsList key={VALUES_GAME[key]}
                textButton={txtGame.options[VALUES_GAME[key]]}
                handleClick={handleButtonClick(VALUES_GAME[key])}
                option={VALUES_GAME[key]} />
            )
          })
        }
      </div>

      {userValue !== null && (
        <div>
          <h3 className="title">Result</h3>
          {getResultMessage()}
        </div>
      )}
    </div>
  );
};

export default RPS_Game;
