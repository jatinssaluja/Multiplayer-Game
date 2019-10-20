const express = require("express");

const app = express();

app.use(
  express.json({
    extended: false
  })
);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  const { player, guess } = req.query;
  const userGuessedNumber = parseInt(guess);
  const randomGeneratedNumber = getRandomIntInclusive(0, 100);

  if (userGuessedNumber < randomGeneratedNumber) {
    res.json({
      player: player,
      guess: "lower"
    });
  } else if (userGuessedNumber > randomGeneratedNumber) {
    res.json({
      player: player,
      guess: "higher"
    });
  } else {
    res.json({
      player: player,
      guess: "Bingo!!!"
    });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
