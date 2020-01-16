const app = document.getElementById('app');

const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Oooooh.')
    .pauseFor(1500)
    .typeString(' That\'s a nice website.')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString(' <strong>really</strong> nice website.')
    .pauseFor(20000)
    .start();


//Toggle MENU
const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
const overlay = document.getElementById('overlay');
const nav     = document.querySelector('.nav');
/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

nav.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.style.display = "none";
})

function myFunction() {
  var x = document.getElementById("overlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
