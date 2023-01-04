

const input = document.querySelector("input[type='text']");
const name = input.focus();
//console.log(name);


// Job Role section
const roleSelect = document.getElementById('title')
const roleInput = document.getElementById('other-job-role')
 roleInput.style.display = 'none';



roleSelect.addEventListener('change', (e) => {
      
   //console.log(roleSelect.value)
   
   if(roleSelect.value === 'other') {
    roleInput.style.display = 'block';
      } else {
        roleInput.style.display = 'none'
      }

});


// T-shirt info section
const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');
const optionColor = document.getElementsByClassName('children')
colorSelect.disabled = true;


colorSelect.addEventListener('change', (e) => {
    
    colorSelect.disabled = false;

    for (let i = optionColor; i < colorSelect.length; i++) {

        const eTarget = event.target;
        const dataTheme = document.querySelectorAll('data-theme')
        if(eTarget === dataTheme) {
         colorSelect[i].hidden = false;
         colorSelect[i].setAttribute('selected', true);


        } if (eTarget !== dataTheme)
         colorSelect[i].hidden =  true;
         colorSelect[i].setAttribute('selected',  false);
}});

