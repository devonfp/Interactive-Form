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

colorSelect.disabled = true;


designSelect.addEventListener('change', (e) => {
    
    colorSelect.disabled = false;
    console.log(e.target.value);

    
    
     if (e.target.value === 'js puns') {
      for (let i = 0; i < colorOptions.length; i++) {
     
        const dataTheme = colorOptions[i].getAttribute(['data-theme']);

          if (dataTheme !==  'js puns') {
            colorOptions[i].hidden = true;
          }

          else if (e.target.value === 'js puns') {
          colorOptions[i].hidden = false;
          }
        }
      } colorOptions[1].selected = true;
    

      if (e.target.value === 'heart js') {
        for (let i = 0; i < colorOptions.length; i++) {

          const dataTheme = colorOptions[i].getAttribute(['data-theme']);

          if (dataTheme !== 'heart js') {
            colorOptions[i].hidden = true;
          }
          
          else if (e.target.value === 'heart js') {
            colorOptions[i].hidden = false;
         }

  }  colorOptions[3].selected = true;
}});


               /*else if (e.target.value === 'heart js') {
                for (let i = 0; i < colorOptions.length; i++) {
                if (dataTheme !== 'heart js') {
                 colorOptions[i].hidden = false;
                 colorSelect.selected = false;
              }
            }
          }}}});*/




        //Register for Activities" section
        // - Involves displaying the total cost of the activities selected by the user
        const activities = document.getElementById('activities');
        const activitiesCost = document.getElementById('activities-cost');
        let totalCost = 0;
        
        activities.addEventListener('change', (e) => {
          let dataCost = parseInt(e.target.getAttribute( 'data-cost' )); 
           console.log(dataCost);
          
           if (e.target.checked) {
           totalCost += dataCost;
        } else {
          totalCost -= dataCost;
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
        
     // Sets credit card as default dropdown option  
     paymentSelect.value = 'credit-card'; 
      

        paymentSelect.addEventListener('change', (e) => {
        
        if (e.target.value === 'paypal') {
         paypalSection.hidden = false;
        } else {
          paypalSection.hidden =  true;
        }

        if (e.target.value === 'bitcoin') {
        bitSection.hidden = false;
       } else {
        bitSection.hidden = true;
       }
      
      
      });
        
        //creditSection.selected = true;


          //const selectedValue = e.target.setAttribute('selected', true); 
          //selectedValue.hidden = false;
        //});






      // Form validation - Prevents one or more of the required fields or sections if not filled out correctly    
        const form = document.querySelector('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cardInput = document.getElementById('cc-num');
        const zipInput = document.getElementById('zip');
        const cvvInput = document.getElementById('cvv');


        form.addEventListener('submit', (e) => {

          // name validation
            const nameValue = nameInput.value;
            console.log("Name value is: ", `"${nameValue}"`);
             
            const nameIsValid = '^[A-Za-z][A-Za-z0-9_]{7,29}$'.test(nameValue);
             
            if (nameIsValid !== true) {
              e.preventDefault;
            }
           
           // email validation
           const emailValue = emailInput.value;
            const emailIsValid = '/^[^@]+@[^@.]+\.[a-z]+$/i'.test(emailValue);
             
           if (emailIsValid !== true) {
             e.preventDefault;
           }

          // card validation
           const cardValue = cardInput.value;
            const cardIsValid ='| 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}'.test(cardValue);
             
           if (cardIsValid !== true) {
             e.preventDefault; 
           }


          // zip validation 
          const zipValue = zipInput.value;
          const zipIsValid = '^[0-9]{5}(?:-[0-9]{4})?$'.test(zipValue);
             
          if (zipIsValid !== true) {
            e.preventDefault;
          }


          // cvv validation
          const cvvValue = cvvInput.value;
          const cvvIsValid = '^[0-9]{3, 4}$'.test(cvvValue);
           
         if (cvvIsValid !== true) {
           e.preventDefault;
         }
        });


       /* const validInput = document.querySelector('.valid')
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
      */


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

