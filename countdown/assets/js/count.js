
  let deadline = new Date("October 30, 2022 13:00:00");
  //Set variable to select the h1 that we need
  let countdown = document.getElementById("countdown");
  countdown.innerHTML = " ";

  function setCountdown() {
    let now = new Date();
    let timeLeft = deadline.getTime() - now.getTime();
  

  let daysLeft = convertToDaysLeft(timeLeft);
  let hoursLeft = convertToHoursLeft(timeLeft);
  let minutesLeft = convertToMinutesLeft(timeLeft);
  let secondsLeft = convertToSecondsLeft(timeLeft);

  countdown.innerHTML = formatCountdownText (DaysLeft, HoursLeft, 
  MinutesLeft, SecondsLeft);

  }

    setInterval(setCountdown, 1000);
