;(function() {
  console.log('timer ready');
  
  var timerContainer = document.querySelector('.timer-container');
  setInterval(function() {
    var today = new Date();
    timerContainer.innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }, 1000);
}
)();
