
// var button = document.getElementById('hamburger-menu'),
//     span = button.getElementsByTagName('span')[0];

// button.onclick =  function() {
//   span.classList.toggle('hamburger-menu-button-close');
// };

// $('#hamburger-menu').on('click', toggleOnClass);

// function toggleOnClass(event) {
//   var toggleElementId = '#' + $(this).data('toggle'),
//   element = $(toggleElementId);

//   element.toggleClass('on');

// }

// // close hamburger menu after click a
// $( '.menu li a' ).on("click", function(){
//   $('#hamburger-menu').click();
// });



// Select menu and button
// const menu = document.getElementById('menu');
// const hamburgerBtn = document.getElementById('hamburger-menu');

// // Add click handler to button
// hamburgerBtn.addEventListener('click', () => {

//   // Toggle "open" class on menu
//   menu.classList.toggle('open');

// });



let menu_icon_box = document.getElementById("menuIconBox");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
      menu_icon_box.classList.toggle(".active");
      box.classList.toggle(".active_box");
      }

// document.onclick = function(e){
//             if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
//                 menu_icon_box.classList.remove("active");
//                 box.classList.remove("active_box");
//             }
//         }


        document.onclick = function(e) {
          if(!menu_icon_box.contains(e.target)) {
            menu_icon_box.classList.remove('active');
            box.classList.remove('active_box'); 
          }
        }
        

      
          menu_icon_box.addEventListener('click', () => {
            menu_icon_box.classList.toggle('active');
            box.classList.toggle('active_box');
          });
          
          document.addEventListener('click', (e) => {
            if(!menu_icon_box.contains(e.target)) {
              menu_icon_box.classList.remove('active');
              box.classList.remove('active_box');
            }
          })
      
    
        






// /* WELCOME  START */
const welcomeIntro = document.getElementById('welcomeIntro');
welcomeIntro.style.display = 'flex';

const welcomeIntroSecond =  document.getElementById('welcomeIntroSecond');
welcomeIntroSecond.style.display = 'none';
const readBtn = document.getElementById('readBtn');
const homeBtn = document.getElementById('homeBtn');

readBtn.addEventListener('click', () => {
  welcomeIntroSecond.style.display = welcomeIntroSecond.style.display === 'none' ? 'flex' : 'none';
  welcomeIntro.style.display =  welcomeIntro.style.display === 'none' ? 'flex' : 'none';
});

homeBtn.addEventListener('click', () => {
  welcomeIntro.style.display = welcomeIntro.style.display === 'none' ? 'flex' : 'none';
  welcomeIntroSecond.style.display = welcomeIntroSecond.style.display === 'none' ? 'flex' : 'none';
 });
/* WELCOME END */


//Set initial visibility
const impoliteDiv = document.getElementById('impolite');
impoliteDiv.style.display = 'flex';
const politeDiv = document.getElementById('polite');
politeDiv.style.display = 'none';
const checkBtn = document.getElementById('checkAnswersBtn');

checkBtn.addEventListener('click', () => {
if(politeDiv.style.display === 'none') {
  politeDiv.style.display = 'flex';
  impoliteDiv.style.display = 'none';
} else {
  politeDiv.style.display = 'none';
  impoliteDiv.style.display = 'flex';
}
});


const crossBtnPolite = document.querySelector('#crossBtnPolite');
crossBtnPolite.addEventListener('click', () => {
  politeDiv.style.display = 'none';
});


const crossBtnImpolite = document.querySelector('#crossBtnImpolite');

crossBtnImpolite.addEventListener('click', () => {
  impoliteDiv.style.display = 'none';
});
































