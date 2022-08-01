import throttle from 'lodash.throttle';

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
    // console.log('відправка');
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(event) {
    const messageName = event.target.name;
    const messageValue = event.target.value;    
    formData[messageName] = messageValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
};

function populateFormInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedSavedMessage = JSON.parse(savedMessage);    
    if (parsedSavedMessage) {
        Object.entries(parsedSavedMessage).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;            
        })
    }
};

