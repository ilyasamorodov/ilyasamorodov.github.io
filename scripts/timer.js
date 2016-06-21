;(function() {
  console.log('timer ready');

  var timerContainer = document.querySelector('.timer-container');
  var rowTimer = document.querySelector('.row-timer');
  var rowMessage = document.querySelector('.row-message');

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

    if (today.getHours() > 8 && today.getHours() < 21)
    {
      rowMessage.style.display = 'none';
      rowTimer.style.display = 'block';
      
      today.setHours(21, 00, 00);
      var rest = getTimeRemaining(today);

      rest.hours = (rest.hours < 10) ? '0' + rest.hours : rest.hours;
      rest.minutes = (rest.minutes < 10) ? '0' + rest.minutes : rest.minutes;
      rest.seconds = (rest.seconds < 10) ? '0' + rest.seconds : rest.seconds;
      console.log(rest.minutes);
      timerContainer.innerHTML = rest.hours + ':' + rest.minutes + ':' + rest.seconds;
    }
    else {
      rowTimer.style.display = 'none';
      rowMessage.style.display = 'block';
    }

  }, 1000);
}
)();
