import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),a="feedback-form-state";r.addEventListener("submit",o);r.addEventListener("input",m);document.addEventListener("DOMContentLoaded",c);function o(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value,s={email:t,message:n};if(!t.trim()||!n.trim()){alert("Error Empty Fields!");return}console.log(s),e.target.reset(),localStorage.removeItem(a)}function m(e){const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;l(a,{email:t,message:n})}function c(){const e=u(a);r.elements.email.value=(e==null?void 0:e.email)||"",r.elements.message.value=(e==null?void 0:e.message)||""}function l(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function u(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=commonHelpers2.js.map