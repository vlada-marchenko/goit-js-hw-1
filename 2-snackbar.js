import"./assets/styles-C1Rsfqza.js";import{i as n}from"./assets/vendor-A92OCY9B.js";const i={form:document.querySelector(".form"),delay:document.querySelector(".input"),button:document.querySelector(".button")};i.form.addEventListener("submit",c);function c(s){s.preventDefault();const t=parseInt(i.delay.value),o=document.querySelector(".input2:checked");if(isNaN(t)||!o)return r;const r=new Promise((e,u)=>{setTimeout(()=>{o.value==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):u(`❌ Rejected promise in ${t}ms`)},t)});r.then(e=>{n.success({message:e})}).catch(e=>{n.error({message:e})})}
//# sourceMappingURL=2-snackbar.js.map
