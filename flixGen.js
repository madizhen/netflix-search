var flix = [
  'AFX',
  'IDX',
  'Main Stacks',
  'TL',
  'Thrive',
  'Movement',
  'jk you are not'
  ]

function genFlix() {
  var randomNumber = Math.floor(Math.random() * (flix.length));
  document.getElementById('flixDisplay').innerHTML = flix[randomNumber];

}