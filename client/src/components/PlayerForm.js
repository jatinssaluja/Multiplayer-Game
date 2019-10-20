import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/PlayerForm.css";
import { getGuessResult, startNewAction } from "../actions/guess";

const PlayerForm = ({
  playerId,
  getGuessResult,
  startNewAction,
  guess_result
}) => {
  const [formData, setFormData] = useState({
    number: "",
    error: "",
    shakeErrorClass: ""
  });

  const { number, error, shakeErrorClass } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (
      /^\d+$/.test(number) &&
      parseInt(number) >= 0 &&
      parseInt(number) <= 100
    ) {
      getGuessResult({ player: playerId, guess: number });
      setFormData({ ...formData, error: "", shakeErrorClass: "" });
    } else {
      setFormData({
        ...formData,
        error: "Please enter a valid number",
        shakeErrorClass: "bounce"
      });

      setTimeout(() => {
        setFormData({
          ...formData,
          error: "Please enter a valid number",
          shakeErrorClass: ""
        });
      }, 1000);
    }
  };

  const startNewGame = e => {
    startNewAction();
  };

  return (
    <div className="player">
      <form onSubmit={onSubmit}>
        {!(
          guess_result &&
          guess_result.guess === "Bingo!!!" &&
          guess_result.player === playerId.toString()
        ) ? (
          <div>
            <p>Enter a number between 0 and 100</p>

            <input
              type="text"
              placeholder="Enter the number"
              name="number"
              value={number}
              className={shakeErrorClass}
              onChange={e => onChange(e)}
              required
            />
          </div>
        ) : (
          <div>
            <h1>Winner!!!</h1>
            <button className="btn" onClick={startNewGame}>
              Start New Game
            </button>
          </div>
        )}
        {error && <p className="form-error">{error}</p>}
        <input
          disabled={guess_result && guess_result.guess === "Bingo!!!"}
          type="submit"
          className={
            !(guess_result && guess_result.guess === "Bingo!!!")
              ? "btn"
              : "btn-disabled"
          }
          value="Submit"
        />
        {!error &&
          guess_result &&
          guess_result.player === playerId.toString() &&
          guess_result.guess !== "Bingo!!!" && (
            <p>{`${guess_result.guess.toUpperCase()} Guess. Try Again.`}</p>
          )}
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  guess_result: state.guess.guess_result
});

export default connect(
  mapStateToProps,
  { getGuessResult, startNewAction }
)(PlayerForm);
