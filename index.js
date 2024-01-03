
 const checkLevelBtn = document.getElementById('checkLevel');
 const checkAnswersBtn = document.getElementById('checkAnswers');
 const politePhrases = document.getElementById('polite');
 const impolitePhrases = document.getElementById('impolite');




 const testBtn = document.getElementById('testBtn');
 


 .tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

 checkAnswersBtn.addEventListener('click', openPolitePhrases);
 function openPolitePhrases() {
   impolitePhrases.classList.remove('open');
   impolitePhrases.ClassList.add('closed');
   politePhrases.classList.remove('closed');
   politePhrases.ClassList.add('open');
 };


 ///tabs

 const tab = document.querySelectorAll('[data-tag-target]');

  tab.addEventListener('click', () => {
       const target  = document.querySelector(tab.dataset.tabTarget);
       target.classList.add('active');
  })











