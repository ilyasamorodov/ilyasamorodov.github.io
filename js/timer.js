;(function() {
  console.log('timer ready');

  var timerContainer = document.querySelector('.timer-container');

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  setInterval(function() {
    var today = new Date();

    if (today.getHours() > 11 && today.getHours() < 21)
    {
      today.setHours(21, 00, 00);
      var rest = getTimeRemaining(today);

      rest.hours = (rest.hours < 10) ? '0' + rest.hours : rest.hours;
      rest.minutes = (rest.minutes < 10) ? '0' + rest.minutes : rest.minutes;
      rest.seconds = (rest.seconds < 10) ? '0' + rest.seconds : rest.seconds;

      timerContainer.innerHTML = rest.hours + ':' + rest.minutes + ':' + rest.seconds;
    }
    else {
      timerContainer.innerHTML = 'Завтра вам точно повезёт!';
    }

  }, 1000);
}
)();
