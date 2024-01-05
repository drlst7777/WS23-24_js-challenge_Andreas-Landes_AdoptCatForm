/*Links on the page still don't work, this will only improve the 
functionality of the "Adopt me!" buttons and the contact form */

//defined the adoptForm as a variable
const adoptForm = document.querySelector('#adoptForm');

//defined the different input fields of the adoptForm as variables
const inputName = document.querySelector('#name');
const inputEMail = document.querySelector('#email');
const textArea = document.querySelector('#adoptForm textarea');

//catch input and display it in a pop-up
adoptForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    alert(`Thank you for caring about cats! We have received your message and will get back to you shortly.
    
    *********************
    This was the content of your message which we have received:
    
    Your Name: ${inputName.value}

    Your Email: ${inputEMail.value}

    Your Message:
    ${textArea.value}
    
    *********************
    
    You can close this window.`);
})
/*whenever the "adopt me" button is clicked, the corresponding cat name
will be fetched and directly input into the adopt form */

const adoptButton = document.querySelectorAll('.cats button'); //gets only the buttons in the cat-divs-section
for (let buttons of adoptButton) {
    buttons.addEventListener('click', function (evt) {
        let catDiv = evt.target.parentElement;
        let nameParagraph = catDiv.querySelector('p:first-of-type');
        let catName = nameParagraph.textContent.split(': ')[1]; //got this from ChatGPT
        textArea.innerText = `I would like to adopt ${catName}`;
        window.location.hash = ''; //got this from ChatGPT, this resets the hash to make it possible to perform the jump to the adoptForm more than once
        window.location.hash = 'adoptForm'; //jump to the adoptForm
    });
}

