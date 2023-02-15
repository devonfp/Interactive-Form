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
          creditSection.hidden = true;
        }

        if (e.target.value === 'bitcoin') {
        bitSection.hidden = false;

       } else {
        bitSection.hidden = true;
        creditSection.hidden = true;
       }

       if (e.target.value === 'credit-card') {
        creditSection.hidden = false;
       }

      });
        






      // Form validation - Prevents one or more of the required fields or sections if not filled out correctly    
        const form = document.querySelector('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cardInput = document.getElementById('cc-num');
        const zipInput = document.getElementById('zip');
        const cvvInput = document.getElementById('cvv');

        const validationHint = document.querySelectorAll('.hint');
        const labelElement = document.querySelectorAll('label')
        console.log(validationHint);


        form.addEventListener('submit', (e) => {
          //e.preventDefault();

          // name validation
            const nameValue = nameInput.value;
            //console.log("Name value is: ", `"${nameValue}"`);
             
            const nameIsValid = /^[a-zA-Z ]{2,30}$/.test(nameValue);
            // regex from: https://stackoverflow.com/a/14088769
             
              if (nameIsValid !== true) {
              e.preventDefault();
              nameInput.parentElement.classList.add('not-valid');
              nameInput.parentElement.classList.remove('valid');
              labelElement.lastElementChild.validationHint.style.display = 'block';

              } else {
                nameInput.parentElement.classList.add('valid');
                nameInput.parentElement.classList.remove('not-valid');
                nameInput.parentElement.lastElementChild.hidden = true;
                labelElement.lastElementChild.validationHint.style.display = 'none';

              } 

            

      
           // email validation
           const emailValue = emailInput.value;
           const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
            // regex from: 
             
            if (emailIsValid !== true) {
            e.preventDefault();
              emailInput.parentElement.classList.add('not-valid');
              emailInput.parentElement.classList.remove('valid');
              labelElement.lastElementChild.validationHint.style.display = 'block';


            } else {
              emailInput.parentElement.classList.add('valid');
                emailInput.parentElement.classList.remove('not-valid');
                emailInput.parentElement.lastElementChild.hidden = true;
                labelElement.lastElementChild.validationHint.style.display = 'none';
            }



            // activity validation 
            if (e.target !== checkboxInput) {
            labelElement.lastElementChild.validationHint.style.display = 'block';
           }

          // credit-card validation
           const cardValue = cardInput.value;             
           const cardIsValid =/(?:\d[ -]*?){13,16}/gm.test(cardValue);
            // regex from: https://regex101.com/library/hgj2qI
           if (cardIsValid !== true) {
            e.preventDefault();
            cardInput.parentElement.classList.add('not-valid');
            cardInput.parentElement.classList.remove('valid');
            labelElement.lastElementChild.validationHint.style.display = 'block';

          } else {
            cardInput.parentElement.classList.add('valid');
              cardInput.parentElement.classList.remove('not-valid');
              cardInput.parentElement.lastElementChild.hidden = true;
              labelElement.lastElementChild.validationHint.style.display = 'none';
          }


          // zip validation 
          const zipValue = zipInput.value;             
          const zipIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipValue);
           // regex from: https://stackoverflow.com/a/160583

          if (zipIsValid !== true) {
            e.preventDefault();
            zipInput.parentElement.classList.add('not-valid');
            zipInput.parentElement.classList.remove('valid');
            labelElement.lastElementChild.validationHint.style.display = 'block';

          } else {
            zipInput.parentElement.classList.add('valid');
              zipInput.parentElement.classList.remove('not-valid');
              zipInput.parentElement.lastElementChild.hidden = true;
              labelElement.lastElementChild.validationHint.style.display = 'none';
          }


          // cvv validation
          const cvvValue = cvvInput.value;

          const cvvIsValid = /^[0-9]{3}$/gm.test(cvvValue);
         // regex from: https://www.debugpointer.com/regex/regex-for-cvv-code
           
         if (cvvIsValid !== true) {
          e.preventDefault();
          cvvInput.parentElement.classList.add('not-valid');
          cvvInput.parentElement.classList.remove('valid');
          cvvInput.labelElement.lastElementChild.validationHint.style.display = 'block';

         } else {
          cvvInput.parentElement.classList.add('valid');
            cvvInput.parentElement.classList.remove('not-valid');
            cvvInput.parentElement.lastElementChild.hidden = true;
            labelElement.lastElementChild.validationHint.style.display = 'none';
          }
        
        });
  


      // Accessibility - notifies a user when an element is in focus, or if a field is invalid. 
      const checkboxInput = document.querySelectorAll("[type='checkbox']");
      //const inputField = document.querySelectorAll('input')
      //const inputLabel = document.querySelectorAll('label');

      for (let i = 0 ; i < checkboxInput.length; i++) {
      checkboxInput[i].addEventListener('focus', (e) => {
      checkboxInput[i].parentElement.classList.add('focus'); 
      });

      checkboxInput[i].addEventListener('blur', (e) => {
      checkboxInput[i].parentElement.classList.remove('focus'); 
      })};       console.log(checkboxInput);


