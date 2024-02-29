const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('submit', onSubmitButton);
form.addEventListener('input', onInputData);

function onSubmitButton (e){
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
    const userData = { email, message };
    
     if (!email.trim() || !message.trim()) {
    alert('Error Empty Fields!');
    return;
  }
  console.log(userData);
    
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function init() {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.email.value = data?.name || '';
  form.elements.message.value = data?.message || '';
}

init();

 function onInputData (e) {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  const userData = { email, message };

  saveToLS(STORAGE_KEY, userData);
};



function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}