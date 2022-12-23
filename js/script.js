

const input = document.querySelector("input[type='text']");
const name = input.focus();
//console.log(name);


const roleInput = document.getElementById('other-job-role')
roleInput.style.display = 'none';
const roleSelect = document.getElementById('title')



roleSelect.addEventListener('change', (e) => {
      
    const clicked = e.target;

    if (clicked.value === 'OTHER') {
      roleInput.style.display = 'block';
}
});
