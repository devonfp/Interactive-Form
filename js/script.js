

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
const optionColor = document.querySelectorAll('[data-theme]');
colorSelect.disabled = true;


designSelect.addEventListener('change', (e) => {
    
    colorSelect.disabled = false;

    for (let i = optionColor; i < colorSelect.length; i++) {

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

        }});

    
        
        //"Register for Activities" section
        const activities = document.getElementById('activities');
        const activitiesCost = document.getElementById('activities-cost')
        let totalCost = 0;
        
        activities.addEventListener('change', (e) => {
          let dataCost = e.target.getAttribute('[data-cost]');
          dataCost+ 
           console.log(dataCost);
          
           if (e.target.checked) {
           dataCost += totalCost;
        } else {
          dataCost - totalCost
        }

        activitiesCost.innerHTML = `Total: $${totalCost}`
        }); 
        
        //  "Payment Info" section
        const paymentSelect = document.getElementById('payment');
        const creditSection = document.getElementById('credit-card');
        const paypalSection = document.getElementById('paypal');
        const bitSection = document.getElementById('bitcoin');

      paypalSection.hidden = true;
       bitSection.hidden = true; 
        
        const selectedValue = paymentSelect.children.setAttribute('selected', true); 

        paymentSelect.addEventListener('change', (e) => {
          selectedValue.hidden = false; 
        });