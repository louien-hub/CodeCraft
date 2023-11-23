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

setTimeout(function () {
    const canvas = document.getElementById("certificate-canvas");
    const img = document.getElementById("img");
    const btn = document.getElementById("btn");
    const ctx = canvas.getContext("2d");
    let txt = "";
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 1200, 800);
    
    ctx.fillStyle = "#179cf0";
    ctx.font = "bold 100pt monospace";
    txt = "CodeCraft";
    const _txt_width = ctx.measureText(txt).width;
    ctx.fillText(txt, ((1200 - _txt_width) / 2) + 105, 147);

    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#179cf0" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0ZM14.97 7.299a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642c.384.503.654 1.035.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528c.283-.37.347-.586.347-.77c0-.185-.064-.4-.347-.77c-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06Zm-.952-1.105a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 1 0 1.45.387l2.587-9.659ZM9.03 7.3a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529c-.283.37-.347.585-.347.77c0 .184.064.4.347.77c.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.172-.17l-.037-.037c-.635-.636-1.165-1.165-1.529-1.643c-.384-.503-.654-1.035-.654-1.68c0-.644.27-1.176.654-1.68c.364-.476.894-1.006 1.53-1.641l.036-.037l.172-.172a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>';

    // Create an image element from the SVG string
    const imgg = new Image();
    imgg.src = 'data:image/svg+xml;base64,' + btoa(svgString);

    // Draw the SVG on the canvas
    imgg.onload = function () {
        ctx.drawImage(imgg, ((1200 - _txt_width) / 2) - 90, 35, 160, 160);
    }
          
    ctx.fillStyle = "#000";
    ctx.font = "53pt Canterbury";
    txt = "CERTIFICATE OF COMPLETION";
    ctx.fillText(txt, (1200 - ctx.measureText(txt).width) / 2, 290);
    
    ctx.font = "300 30pt Roboto";
    txt = "This document certifies that";
    ctx.fillText(txt, (1200 - ctx.measureText(txt).width) / 2, 350);
    
    const name = "Louien Franco E. Axalan";
    ctx.font = "60pt Canterbury";
    ___start = (1200 - ctx.measureText(name).width) / 2;
    ctx.fillText(name, ___start, 430);
    
    ctx.beginPath();
    ctx.moveTo(___start - 5, 445);
    ctx.lineTo(___start + ctx.measureText(name).width + 5, 445);
    ctx.lineWidth = 5;
    ctx.stroke();
    
    ctx.font = "300 30pt Roboto";
    txt = "has successfully completed the";
    ctx.fillText(txt, (1200 - ctx.measureText(txt).width) / 2, 495);
    
    ctx.font = "500 50pt Roboto";
    txt = "HTML Course";
    ctx.fillText(txt, (1200 - ctx.measureText(txt).width) / 2, 565);
    
    ctx.font = "300 30pt Roboto";
    txt = "on our mobile application named Learn HTML.";
    ctx.fillText(txt, (1200 - ctx.measureText(txt).width) / 2, 615);
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const _d = new Date("2023-11-08");
    ctx.font = "25pt Roboto";
    txt = monthNames[_d.getMonth()] + " " + _d.getDate() + ", " + _d.getFullYear();
    ctx.fillText(txt, ((300 - ctx.measureText(txt).width) / 2) + 100, 735)
    
    const svgString2 = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="462.000000pt" height="230.000000pt" viewBox="0 0 462.000000 230.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,230.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M1336 2118 c-3 -13 -7 -54 -11 -93 -7 -82 -29 -208 -56 -320 -30
    -127 -39 -155 -49 -155 -5 0 -18 19 -29 43 -52 110 -129 136 -242 80 -109 -54
    -295 -274 -419 -498 -18 -33 -59 -106 -91 -163 -162 -293 -256 -614 -219 -746
    15 -54 60 -102 110 -117 48 -14 105 3 210 65 96 56 154 107 236 209 150 187
    241 366 374 730 23 64 46 117 50 117 5 0 11 -39 15 -86 8 -97 -7 -286 -32
    -400 -15 -68 -15 -76 -1 -91 25 -24 49 -7 100 70 26 40 91 132 145 205 54 73
    107 146 118 162 26 37 89 73 115 65 24 -8 36 -50 49 -179 8 -80 14 -103 32
    -122 46 -49 66 -38 225 125 80 82 154 151 165 154 36 10 51 -32 57 -161 2 -64
    9 -125 14 -134 13 -27 53 -22 78 10 11 15 45 43 74 62 30 19 79 52 109 73 78
    54 118 58 203 18 92 -43 148 -46 364 -22 102 11 246 25 320 31 74 6 216 17
    315 25 99 9 284 22 411 30 234 14 283 23 326 62 23 21 23 50 -1 63 -15 7 -32
    4 -76 -16 -69 -32 -136 -40 -375 -48 -184 -6 -254 -10 -715 -44 -132 -9 -294
    -17 -360 -17 -111 0 -124 2 -176 28 -82 40 -136 37 -235 -12 -43 -21 -101 -57
    -128 -79 -28 -23 -51 -40 -52 -39 -2 2 -12 45 -24 96 -33 148 -75 185 -164
    142 -54 -26 -229 -190 -267 -249 l-28 -44 -6 39 c-29 195 -47 249 -87 277 -30
    21 -63 20 -114 -4 -58 -29 -135 -116 -267 -302 -26 -38 -49 -68 -50 -68 -1 0
    -2 89 -2 197 0 119 -5 226 -13 268 -13 68 -12 73 22 190 66 230 120 533 103
    579 -10 24 -46 20 -51 -6z m-238 -471 c31 -33 72 -129 79 -186 5 -44 -1 -69
    -42 -183 -184 -518 -350 -809 -548 -964 -56 -45 -174 -103 -209 -104 -29 0
    -77 49 -88 91 -34 126 79 456 280 818 77 138 204 320 281 402 44 48 186 149
    208 149 10 0 27 -10 39 -23z"/>
    </g>
    </svg>
    `;

    // Create an image element from the SVG string
    const imgg1 = new Image();
    imgg1.src = 'data:image/svg+xml;base64,' + btoa(svgString2);

    // Draw the SVG on the canvas
    imgg1.onload = function () {
        ctx.drawImage(imgg1, ((300 - 145.6) / 2) + 770, 635, 245.6, 163.6);
    }
    
    ctx.beginPath();
    ctx.moveTo(100, 745);
    ctx.lineTo(400, 745);
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(800, 745);
    ctx.lineTo(1100, 745);
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.font = "300 25pt Roboto";
    txt = "Date Issued";
    ctx.fillText(txt, ((300 - ctx.measureText(txt).width) / 2) + 100, 775);
    
    txt = "CodeCraft";
    ctx.fillText(txt, ((300 - ctx.measureText(txt).width) / 2) + 800, 775);
    
    setTimeout(function () {
        const b64 = canvas.toDataURL("image/png");
        img.src = b64;
        btn.disabled = false;
        btn.innerText = "Download Certificate";
        btn.onclick = function() {
            const a = document.createElement("a");
            a.download = "certificate.png";
            a.href = b64;
            a.click();
        }
    }, 1000);
}, 1000);