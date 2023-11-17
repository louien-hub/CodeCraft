// Pages
document.querySelectorAll('div a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Show the clicked section and hide others
        document.querySelectorAll('.all-pages main').forEach(main => {
            main.style.display = 'none';
        });
        targetElement.style.display = 'block';

        // Scroll to the top of the clicked section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Pages End


// class Validator {
//     constructor() {
//         this.textArea = document.getElementById("textarea-1");
//         this.result1 = document.getElementById("result1");
//         this.result2 = document.getElementById("result2");
//         this.result3 = document.getElementById("result3");
//         this.con1 = document.getElementById("con1");
//         this.con2 = document.getElementById("con2");
//         this.con3 = document.getElementById("con3");
        
//     }

//     validate() {
//         const textAreaValue = this.textArea.value.replace(/\s/g, '');
//         if (textAreaValue.includes('<div>') && textAreaValue.includes('</div>')) {
//             this.result1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>' + this.con1.textContent;
//         } else {
//             this.result1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>' + this.con1.textContent;
//         }
//     }
// }


// const validator = new Validator();
// document.getElementById("btnFinal-1").addEventListener("click", () => {
//     validator.validate();
// });

// class Validator {
//     constructor() {
//         this.textArea = document.getElementById("textarea-1");
//         this.result1 = document.getElementById("result1");
//         this.result2 = document.getElementById("result2");
//         this.result3 = document.getElementById("result3");
//         this.con1 = document.getElementById("con1");
//         this.con2 = document.getElementById("con2");
//         this.con3 = document.getElementById("con3");
        
//     }

//     validate() {
//         const textAreaValue = this.textArea.value.replace(/\s/g, '');
//         let validationMessage;

//         if (textAreaValue.includes('<div>') && textAreaValue.includes('</div>')) {
//             validationMessage = 'Correct' + this.con1.textContent;
//         } else {
//             validationMessage = 'Wrong' + this.con1.textContent;
//         }

//         // Save the validation result in local storage
//         localStorage.setItem('validationResult', validationMessage);

//         // Update the result in the DOM
//         this.result1.innerHTML = validationMessage;
//     }
// }

// const validator = new Validator();

// document.getElementById("btnFinal-1").addEventListener("click", () => {
//     validator.validate();
// });

// // Retrieve the validation result from local storage
// const storedResult = localStorage.getItem('validationResult');

// // Display the stored result on page load (optional)
// if (storedResult) {
//     validator.result1.innerHTML = storedResult;
// }

class Validator {
    constructor() {
        this.textArea = document.getElementById("textarea-1");
        this.result1 = document.getElementById("result1");
        this.result2 = document.getElementById("result2");
        this.result3 = document.getElementById("result3");
        this.con1 = document.getElementById("con1");
        this.con2 = document.getElementById("con2");
        this.con3 = document.getElementById("con3");
        
        // Retrieve the textarea value from local storage (if available)
        const storedTextAreaValue = localStorage.getItem('textAreaValue');
        if (storedTextAreaValue) {
            this.textArea.value = storedTextAreaValue;
        }
    }

    validate() {
        const textAreaValue = this.textArea.value.replace(/\s/g, '');
        let validationMessage;

        if (textAreaValue.includes('<div>') && textAreaValue.includes('</div>')) {
            validationMessage = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>' + this.con1.textContent;
        } else {
            validationMessage = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>' + this.con1.textContent;
        }

        // Save the validation result in local storage
        localStorage.setItem('validationResult', validationMessage);

        // Save the textarea value in local storage
        localStorage.setItem('textAreaValue', this.textArea.value);

        // Update the result in the DOM
        this.result1.innerHTML = validationMessage;
    }
}

const validator = new Validator();

document.getElementById("btnFinal-1").addEventListener("click", () => {
    validator.validate();
});

// Retrieve the validation result from local storage
const storedResult = localStorage.getItem('validationResult');
if (storedResult) {
    validator.result1.innerHTML = storedResult;
}
