const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();

function onFormSubmit(event) {
    event.preventDefault();
    console.log('відправка');
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(event) {
    const messageName = event.target.name;
    const messageValue = event.target.value;    
    formData[messageName] = messageValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
    
};
function populateFormInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedSavedMessage = JSON.parse(savedMessage);

    if (parsedSavedMessage) {
        console.log(savedMessage);
        console.log(parsedSavedMessage);

        email.value = parsedSavedMessage.email;
        textarea.value = parsedSavedMessage.message;
    };    
    
 }