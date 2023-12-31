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



class Validator {
    
    constructor() {
        this.textArea = document.getElementById("textarea-1");
        this.result1 = document.getElementById("result1");
        this.result2 = document.getElementById("result2");
        this.result3 = document.getElementById("result3");
        this.result4 = document.getElementById("result4");
        
        // Retrieve the textarea value from local storage (if available)
        const storedTextAreaValue = localStorage.getItem('textAreaValue');
        if (storedTextAreaValue) {
            this.textArea.value = storedTextAreaValue;
        }
    }

    validate() {
        const textAreaValue = this.textArea.value.replace('');
        const act1 = textAreaValue.includes('<nav>') &&
            textAreaValue.includes('<h2>Navigation</h2>') &&
            textAreaValue.includes('<ul>') &&
            textAreaValue.includes('<li>') &&
            textAreaValue.includes(`<a href="#home">`) &&
            textAreaValue.includes('Home') &&
            textAreaValue.includes('</a>') &&
            textAreaValue.includes('</li>') &&
            textAreaValue.includes('</ul>') &&
            textAreaValue.includes('</nav>');
            
        const act2 = textAreaValue.includes('<div id="home">') &&
            textAreaValue.includes('<h1>') &&
            textAreaValue.includes('Home') &&
            textAreaValue.includes('</h1>') &&
            textAreaValue.includes('<h3>') &&
            textAreaValue.includes('Title') &&
            textAreaValue.includes('</h3>') &&
            textAreaValue.includes('<p>') &&
            textAreaValue.includes('</p>') &&
            textAreaValue.includes('<p>') &&
            textAreaValue.includes('</p>') &&
            textAreaValue.includes('</div>');
            
        const act3 = textAreaValue.includes('<div id="about">') &&
            textAreaValue.includes('<h1>') &&
            textAreaValue.includes('About') &&
            textAreaValue.includes('</h1>') &&
            textAreaValue.includes('<ul>') &&
            textAreaValue.includes('<h3>') &&
            textAreaValue.includes('List') &&
            textAreaValue.includes('</h3>') &&
            textAreaValue.includes('<li>') &&
            textAreaValue.includes('Hello World') &&
            textAreaValue.includes('</li>') &&
            textAreaValue.includes('<li>') &&
            textAreaValue.includes('Hello World') &&
            textAreaValue.includes('</li>') &&
            textAreaValue.includes('<li>') &&
            textAreaValue.includes('Hello World') &&
            textAreaValue.includes('</li>') &&
            textAreaValue.includes('</ul') &&
            textAreaValue.includes('</div>');
            
        const act4 = textAreaValue.includes('<footer>') &&
            textAreaValue.includes('<hr>') &&
            textAreaValue.includes('CodeCraft 2023') &&
            textAreaValue.includes('</footer>')

        let validationResult1
        let validationResult2;
        let validationResult3;
        let validationResult4;

        if (act1) {
            validationResult1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>';
        } else {
            validationResult1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>';
        }

        if (act2) {
            validationResult2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>';
        } else {
            validationResult2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>';
        }

        if (act3) {
            validationResult3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>';
        } else {
            validationResult3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>';
        }

        if (act4) {
            validationResult4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#5BB450" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>';
        } else {
            validationResult4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/></svg>';
        }

        // Save the validation result in local storage
        localStorage.setItem('validationResult_1', validationResult1);
        localStorage.setItem('validationResult_2', validationResult2);
        localStorage.setItem('validationResult_3', validationResult3);
        localStorage.setItem('validationResult_4', validationResult4);

        // Save the textarea value in local storage
        localStorage.setItem('textAreaValue', this.textArea.value);

        // Update the result in the DOM
        this.result1.innerHTML = validationResult1;
        this.result2.innerHTML = validationResult2;
        this.result3.innerHTML = validationResult3;
        this.result4.innerHTML = validationResult4;
    }
}

const validator = new Validator();

document.getElementById("btnFinal-1").addEventListener("click", () => {
    validator.validate();
});

// Retrieve the validation result from local storage
const storedResult_1 = localStorage.getItem('validationResult_1');
const storedResult_2 = localStorage.getItem('validationResult_2');
const storedResult_3 = localStorage.getItem('validationResult_3');
const storedResult_4 = localStorage.getItem('validationResult_4');

if (storedResult_1) {
    validator.result1.innerHTML = storedResult_1;
}

if (storedResult_2) {
    validator.result2.innerHTML = storedResult_2;
}

if (storedResult_3) {
    validator.result3.innerHTML = storedResult_3;
}

if (storedResult_4) {
    validator.result4.innerHTML = storedResult_4;
}


function final_1() {
    var textArea = document.getElementById('textarea-1');
    var iframe = document.getElementById('iframe-1');

    textArea.addEventListener('input', function() {
    iframe.contentDocument.body.innerHTML = textArea.value;
    });

    // Auto-refresh the iframe when the page loads
    iframe.contentDocument.body.innerHTML = textArea.value;

    // Make the iframe not clickable
    iframe.style.pointerEvents = 'none';
}; final_1();


// certificates
