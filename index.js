
const dropdownContent = document.getElementById('dropdownContent');
const dropBtn = document.getElementById('dropbtn');
dropBtn.addEventListener('click', dropDownContent());
 function dropDownContent()  {
    dropdownContent.classList.remove('close');
    dropdownContent.classList.add('open');
 }



 const API_KEY = "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";
 const submitButton = document.querySelector('#submit');

 async function getMessage()  {
    console.log('clicked');
     try {
        await fetch('https://api.openai.com/v1/chat/completions')
     } catch {
     }
 }

 submitButton.addEventListener('click', getMessage )