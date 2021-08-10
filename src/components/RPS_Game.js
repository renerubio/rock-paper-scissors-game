import React, { useState } from 'react';
import txtGame from '../helpers';
import CustomButton from './CustomButton';
import './RPS_Game.scss';

const RPS_Game = () => {
  const [userValue, updateUserValue] = useState(null);
  const [pcValue, updatePcValue] = useState(null);

  const VALUES_GAME = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
  }

  const pcMove = () => Math.floor(Math.random() * 3);

  const getResultMessage = () => {
    const txtGameMoves = {
      userMove: `Your chose: ${txtGame.options[userValue]}`,
      pcMove: `PC move: ${txtGame.options[pcValue]}`,
    };

    const resultMessage = (winner) => {
      return (
        <p className="has-text-centered">
          {winner}<br />
          {txtGameMoves.userMove}<br />
          {txtGameMoves.pcMove}
        </p>
      )
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
  }

  const handleButtonClick = value => () => {
    updateUserValue(value);
    updatePcValue(pcMove);
  }

  const getButtonList = () => {
    return Object.keys(VALUES_GAME).map((key) => {
      return (
        <CustomButton
          key={VALUES_GAME[key]}
          textButton={txtGame.options[VALUES_GAME[key]]}
          handleClick={handleButtonClick(VALUES_GAME[key])}
          option={VALUES_GAME[key]} />
      )
    })
  }

  return (
    <div className="section custom-section has-background-white-ter">
      <h2 className="title has-text-centered">{txtGame.title}</h2>
      <div className="columns is-justify-content-center">
        {getButtonList()}
      </div>

      {userValue !== null && (
        <>
          <h3 className="title has-text-centered">{txtGame.subtitle}</h3>
          <div className="columns is-justify-content-center">
            {getResultMessage()}
          </div>
        </>
      )}
    </div>
  );
};

export default RPS_Game;
