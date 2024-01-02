
 const checkLevelBtn = document.getElementById('checkLevel');
 const checkAnswersBtn = document.getElementById('checkAnswers');
 const politePhrases = document.getElementById('polite');
 const impolitePhrases = document.getElementById('impolite');




 const testBtn = document.getElementById('testBtn');
 




 checkAnswersBtn.addEventListener('click', openPolitePhrases);
 function openPolitePhrases() {
   impolitePhrases.classList.remove('open');
   impolitePhrases.ClassList.add('closed');
   politePhrases.classList.remove('closed');
   politePhrases.ClassList.add('open');
 };
 







