;(function(){
  console.log('custom ready');
})();


var works = document.getElementById('works');

var modal = document.getElementById('modal');
var title = document.getElementById('modal-title');
var image = document.getElementById('modal-image');
var description = document.getElementById('modal-description');

works.onclick = function(event) {
  if (event.target.nodeName != 'IMG') return;

  var workObject = event.target;

  title.innerHTML = workObject.getAttribute('data-title');
  image.src = workObject.getAttribute('data-image');
  image.alt = workObject.getAttribute('data-title');
  description.innerHTML = workObject.getAttribute('data-description');

  document.body.style.overflowY = "hidden";
  modal.style.width = "100%";

  return false;
}

function closeNav() {
  document.body.style.overflowY = "scroll";
  document.getElementById("modal").style.width = "0%";
}
