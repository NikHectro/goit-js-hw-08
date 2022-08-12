import throttle from "lodash.throttle";

const formData = {};
const STORAGE_KEY = 'feedback-message';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = JSON.stringify(evt.target.value);
    console.log(formData);
})

populateTextArea();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    // console.log(event.currentTarget);
    localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
    console.log(message);
    // const message = localStorage.setItem("feedback", evt.value)
}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}


