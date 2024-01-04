
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
    function openWelcome() {
      welcomeIntro.classList.add('open');
      welcomeIntro.classList.remove('close');
      welcomeIntroSecond.classList.add('close');
      welcomeIntroSecond.classList.remove('open');
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



























