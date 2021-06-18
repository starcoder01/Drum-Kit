function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


window.addEventListener('click',function(){
  alert("Press the keys to experience this wonderful drum kit !");
});

function fun1(){
  document.getElementsByTagName("audio")[0].play();
}

function fun2(){
  document.getElementsByTagName("audio")[1].play();
}

function fun3(){
  document.getElementsByTagName("audio")[2].play();
}

function fun4(){
  document.getElementsByTagName("audio")[3].play();
}

function fun5(){
  document.getElementsByTagName("audio")[4].play();
}

function fun6(){
  document.getElementsByTagName("audio")[5].play();
}

function fun7(){
  document.getElementsByTagName("audio")[6].play();
}

function fun8(){
  document.getElementsByTagName("audio")[7].play();
}
