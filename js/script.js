// Name field section - Puts the first form field in focus when the page loads
const input = document.querySelector("input[type='text']");
const name = input.focus();


/* Job Role section - Hides the 'Other Job role" field by default. Only displayed if
 user selects "Other" option from the "Job Role" drop-down menu. 
 Is hidden when user selects any other option */ 
const roleSelect = document.getElementById('title');
const roleInput = document.getElementById('other-job-role');


 roleInput.style.display = 'none';

roleSelect.addEventListener('change', (e) => {
         
if(roleSelect.value === 'other') {
    roleInput.style.display = 'block';
      } else {
        roleInput.style.display = 'none'
      }
});






/* T-shirt info section -
Disables the "Color" menu by default.
Also prevents users from selecting an invalid color for a particular theme. 
Once a theme is selected, the "Color" menu is be enabled. Other color 
options are displayed/hidden based on which theme the user has selected.*/

const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');

const colorOptions = document.querySelectorAll('[data-theme]');

const jspunsOptions = colorOptions.getAttribute('js puns');
const heartjsOptions = colorOptions.getAttribute('heart js');

colorSelect.disabled = true;


designSelect.addEventListener('change', (e) => {
    
    colorSelect.disabled = false;

    for (let i = 0; i > colorOptions.length; i++) {
    
     if (e.target.value === jspunsOptions) {
    jspunsOptions.hidden = true;
    }

    if (e.target.value ===  heartjsOptions) {
      heartjsOptions.hidden = true;
    }
  
  }});


    /*for (let i = optionColor; i < colorSelect.length; i++) {

        const eTarget = e.target;
        const dataTheme = optionColor[i].getAttribute('[data-theme]');
        if (eTarget === dataTheme) {
         optionColor[i].hidden = false;
         optionColor[i].setAttribute('selected', true);
        }


         if (eTarget !== dataTheme) {
         optionColor[i].hidden =  true;
         optionColor[i].setAttribute('selected',  false);
         }
         console.log(eTarget);

        }});*/

    
        




        //Register for Activities" section
        // - Involves displaying the total cost of the activities selected by the user
        const activities = document.getElementById('activities');
        const activitiesCost = document.getElementById('activities-cost')
        let totalCost = 0;
        
        activities.addEventListener('change', (e) => {
          let dataCost = e.target.getAttribute.parseInt(['data-cost']); 
           console.log(dataCost);
          
           if (e.target.checked) {
           totalCost += dataCost;
        } else {
          totalCost - dataCost
        }

        activitiesCost.innerHTML = `Total: $${totalCost}`
        }); 



        

        //  "Payment Info" section 
        // -  Involves displaying the perfered or most common payment method by default, while the other payment form sections are hidden.
        const paymentSelect = document.getElementById('payment');
        const creditSection = document.getElementById('credit-card');
        const paypalSection = document.getElementById('paypal');
        const bitSection = document.getElementById('bitcoin');

      paypalSection.hidden = true;
       bitSection.hidden = true; 
        

        paymentSelect.addEventListener('change', (e) => {
          const selectedValue = e.target.setAttribute('selected', true); 
          selectedValue.hidden = false;
        });






      // Form validation - Prevents one or more of the required fields or sections if not filled out correctly    
        const form = document.querySelector('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cardInput = document.getElementById('cc-num');
        const zipInput = document.getElementById('zip');
        const cvvInput = document.getElementById('cvv');
        const validInput = document.querySelector('.valid')
        const notvalidInput = document.querySelector('.not-valid')
        
        form.addEventListener('submit', (e) => {
        
       const nameinputValue = nameInput.value;
      const regex1 = '^[A-Za-z][A-Za-z0-9_]{7,29}$'.test(nameinputValue);
        //regex from: https://laasyasettyblog.hashnode.dev/validating-username-using-regex

       if (regex1 === false) {
        e.preventDefault();
        nameInput.parentElement.classList.add('notvalidInput'); 
        nameInput.parentElement.classList.remove('validInput');
        nameInput.parentElement.lastElementChild.style.display = 'block';
       } else {
        nameInput.parentElement.classList.add('validInput'); 
        nameInput.parentElement.classList.remove('notvalidInput');
        nameInput.parentElement.lastElementChild.style.display = 'none'; 
       }

        const emailInputValue = emailInput.value;
        const regex2 = '/^[^@]+@[^@.]+\.[a-z]+$/i'.test(emailInputValue);
        

       if (regex2 === false) {
        e.preventDefault();
        emailInput.parentElement.classList.add('notvalidInput'); 
        emailInput.parentElement.classList.remove('validInput');
        emailInput.parentElement.lastElementChild.style.display = 'block'; 
       } else {
        emailInput.parentElement.classList.add('validInput');
        emailInput.parentElement.classList.remove('notvalidInput');
        emailInput.parentElement.lastElementChild.style.display = 'none'; 
       }

        const cardInputValue = cardInput.value;
        const regex3 = '| 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}'.test(cardInputValue);
        //  regex from: https://www.regular-expressions.info/creditcard.html

       if (regex3 === false) {
        e.preventDefault();
        cardInput.parentElement.classList.add('notvalidInput'); 
        cardInput.parentElement.classList.remove('validInput');
        cardInput.parentElement.lastElementChild.style.display = 'block'; 
       } else {
        cardInput.parentElement.classList.add('validInput'); 
        cardInput.parentElement.classList.remove('notvalidInput');
        cardInput.parentElement.lastElementChild.style.display = 'none';
       }
        
       const zipInputValue =  zipInput.value;
       const regex4 = '^[0-9]{5}(?:-[0-9]{4})?$'.test(zipInputValue);
       // regex from: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html#:~:text=You%20need%20to%20validate%20a,123456789%20%2C%20or%201234%2D56789%20.

      if (regex4 === false) {
       e.preventDefault();
        zipInput.parentElement.classList.add('notvalidInput');
         zipInput.parentElement.classList.remove('validInput');
         zipInput.parentElement.lastElementChild.style.display = 'block'; 
      } else {
        zipInput.parentElement.classList.add('validInput'); 
        zipInput.parentElement.classList.remove('notvalidInput');
        zipInput.parentElement.lastElementChild.style.display = 'none';
      }

        const cvvInputValue = cvvInput.value;
        const regex5 = '^[0-9]{3, 4}$'.test(cvvInputValue);
        //regex from: https://www.geeksforgeeks.org/how-to-validate-cvv-number-using-regular-expression/

       if (regex5 === false) {
        e.preventDefault();
        cvvInput.parentElement.classList.add('notvalidInput');
        cvvInput.parentElement.classList.remove('validInput');
        cvvInput.parentElement.lastElementChild.style.display = 'block'
       } else {
        cvvInput.parentElement.classList.add('validInput'); 
        cvvInput.parentElement.classList.remove('notvalidInput');
        cvvInput.parentElement.lastElementChild.style.display = 'none';
       }
      });


      // Accessibility - notifies a user when an element is in focus, or if a field is invalid. 
      const checkboxInput = document.querySelectorAll('input [type=checkbox]')
      const focusClass = document.querySelector('.focus');
      const activitiesBox = document.getElementById('activities-box');
      const firstLabel = activitiesBox.firstElementChild;

      for (let i = 0 ; i < checkboxInput.length; i++) {
      checkboxInput.addEventListener('focus', (e) => {
       firstLabel.classList.add('focusClass'); 
      });

      checkboxInput.addEventListener('blur', (e) => {
      firstLabel.classList.remove('focusClass');
      })};

