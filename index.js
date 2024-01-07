
//  const checkLevelBtn = document.getElementById('checkLevel');
//  const checkAnswersBtn = document.getElementById('checkAnswers');
//  const politePhrases = document.getElementById('polite');
//  const impolitePhrases = document.getElementById('impolite');


 const welcomeIntro = document.getElementById('welcomeIntro');
 const readBtn = document.getElementById('readBtn');
 const welcomeIntroSecond = document.getElementById('welcomeIntroSecond');
 const homeBtn = document.getElementById('homeBtn');

 readBtn.addEventListener('click', openWelcomeSecond);
    function openWelcomeSecond() {
        welcomeIntro.classList.add('close');
        welcomeIntro.classList.remove('open');
        welcomeIntroSecond.classList.remove('close');
        welcomeIntroSecond.classList.add('open');
    }

    homeBtn.addEventListener('click', openWelcome);


/*
    function openWelcome() {
      if (welcomeIntroSecond.classList.contains('open'))
       {
        welcomeIntroSecond.classList.remove('open');
        welcomeIntroSecond.classList.add('close');
      }
     welcomeIntro.classList.add('open');
      welcomeIntro.classList.remove('close');
    }
    */


function openRegisterForm() {
	if (loginForm.classList.contains("open")) {
		loginForm.classList.remove("open");
		loginForm.classList.add("close");
	}
	registerForm.classList.add("open");
	registerForm.classList.remove("close");
}




    const checkAnswersBtn = document.getElementById('checkAnswersBtn');
    const polite = document.getElementById('polite');
    const impolite = document.getElementById('impolite');

    checkAnswersBtn.addEventListener('click', openPoliteAnswers);
    function openPoliteAnswers() {
      impolite.classList.add('close');
      impolite.classList.remove('open');
      polite.classList.add('open');
      polite.classList.remove('close');

    }



























