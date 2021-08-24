$(document).ready(function () {
  const answers = [
    "It is certain.",
    "It is decidedly so",
    "Without a doubt.",
    "Yes - definately.",
    "You may rely on it.",
    "As I see it, yes",
    "Most likely",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no.",
    "My sources say no",
    "Outlook not so good.",
    "Very doubtful",
  ];

  $("#magicEightBall").click(activateBall);

  //Get a random answer
  function getAnswer() {
    $("#magicEightBall").addClass("answer-in-progress");
    let randomAnswerIndex = Math.floor(Math.random() * answers.length);
    return answers[randomAnswerIndex];
  }

  function displayAnswer(answer) {
    $("#answerDisplay").text(answer);
  }

  function toggleDisableClicks() {
    $("#magicEightBall").toggleClass("answer-in-progress");
  }

  //Animate Ball Shaking
  function shakeBallAnimation() {
    clearBallAnimations();
    $("#magicEightBall").effect(
      "shake",
      { direction: "left", times: 10, distance: 20 },
      2000
    );
    $("#numberEightDisplay").addClass("move-ball");
  }

  //Remove animations from the ball
  function clearBallAnimations() {
    $("#numberEightDisplay").removeClass("move-ball");
    $("#numberEightDisplay").removeClass("move-ball-back");
  }

  function fadeAnswerInOut() {
    $("#answerDisplay").delay(2000).fadeIn(2000).fadeOut(2000);
  }

  //Animate the ball returning to the starting position
  function resetBallAnimation() {
    clearBallAnimations();
    $("#numberEightDisplay").addClass("move-ball-back");
  }

  function reset() {
    resetBallAnimation();
    setTimeout(toggleDisableClicks, 2000);
  }

  function activateBall() {
    toggleDisableClicks();
    displayAnswer(getAnswer());
    shakeBallAnimation();
    fadeAnswerInOut();
    setTimeout(reset, 6000);
  }
});
