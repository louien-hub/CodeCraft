// const firebaseConfig = {
//     apiKey: "AIzaSyBsIHF6J6_FxVR98t_f1p42dkwGr4fZYVg",
//     authDomain: "monitor-56a58.firebaseapp.com",
//     databaseURL: "https://monitor-56a58-default-rtdb.firebaseio.com",
//     projectId: "monitor-56a58",
//     storageBucket: "monitor-56a58.appspot.com",
//     messagingSenderId: "840861019660",
//     appId: "1:840861019660:web:93883744d05224023e4829"
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.database();

// function submitFeedback() {
//     const emailInput = document.getElementById('email');
//     const feedbackInput = document.getElementById('feedback');
//     const submitButton = document.getElementById('submitButton');

//     const email = emailInput.value.trim();
//     const feedbackText = feedbackInput.value.trim();

//     // Check if both email and feedback are not empty
//     if (email === '' && feedbackText === '') {
//         console.log('Both email and feedback are empty. Feedback not submitted.');
//         return;
//     }

//     // Disable the button and change its text to "Sending"
//     submitButton.disabled = true;
//     submitButton.textContent = 'Sending...';

//     const feedbackId = generateUniqueId();

//     db.ref('feedback/' + feedbackId).set({
//         email: email,
//         feedback: feedbackText
//     })
//     .then(() => {
//         console.log('Feedback submitted successfully!');
//         // Clear the form
//         emailInput.value = '';
//         feedbackInput.value = '';

//         // Re-enable the button and change its text back to "Submit"
//         submitButton.disabled = false;
//         submitButton.textContent = 'Submit';
//     })
//     .catch((error) => {
//         console.error('Error submitting feedback: ', error);

//         // Re-enable the button and change its text back to "Submit"
//         submitButton.disabled = false;
//         submitButton.textContent = 'Submit';
//     });
// }


// function generateUniqueId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }


const firebaseConfig = {
    apiKey: "AIzaSyBsIHF6J6_FxVR98t_f1p42dkwGr4fZYVg",
    authDomain: "monitor-56a58.firebaseapp.com",
    databaseURL: "https://monitor-56a58-default-rtdb.firebaseio.com",
    projectId: "monitor-56a58",
    storageBucket: "monitor-56a58.appspot.com",
    messagingSenderId: "840861019660",
    appId: "1:840861019660:web:93883744d05224023e4829"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function submitFeedback() {
    const emailInput = document.getElementById('email');
    const feedbackInput = document.getElementById('feedback');
    const submitButton = document.getElementById('submitButton');

    const email = emailInput.value.trim();
    const feedbackText = feedbackInput.value.trim();

    // Check if both email and feedback are not empty
    if (email === '' && feedbackText === '') {
        console.log('Both email and feedback are empty. Feedback not submitted.');
        return;
    }

    // Disable the button and change its text to "Sending"
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const feedbackId = generateUniqueId();
    const timestamp = new Date().toLocaleString(); // Get current date and time

    db.ref('feedback/' + feedbackId).set({
        email: email,
        feedback: feedbackText,
        timestamp: timestamp
    })
    .then(() => {
        console.log('Feedback submitted successfully!');
        // Clear the form
        emailInput.value = '';
        feedbackInput.value = '';

        // Re-enable the button and change its text back to "Submit"
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    })
    .catch((error) => {
        console.error('Error submitting feedback: ', error);

        // Re-enable the button and change its text back to "Submit"
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    });
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
