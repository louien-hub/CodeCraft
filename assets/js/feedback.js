var firebaseConfig = {
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

    const email = emailInput.value;
    const feedbackText = feedbackInput.value;

    const feedbackId = generateUniqueId();

    db.ref('feedback/' + feedbackId).set({
        email: email,
        feedback: feedbackText
    })
    .then(() => {
        console.log('Feedback submitted successfully!');
        // Clear the form
        emailInput.value = '';
        feedbackInput.value = '';
    })
    .catch((error) => {
        console.error('Error submitting feedback: ', error);
    });
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
