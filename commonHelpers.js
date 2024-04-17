(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const c="https://jsonplaceholder.typicode.com/todos",d=document.querySelector(".todo-form"),a=document.querySelector(".list");d.addEventListener("submit",f);a.addEventListener("click",p);a.addEventListener("click",h);async function l(e,r={}){const o=await fetch(e,r);if(!o.ok)throw new Error(o.statusText);return await o.json()}l(c).then(e=>{a.innerHTML=u(e)}).catch(e=>console.error("Error fetching todos:",e));function u(e){return e.slice(0,5).map(({id:r,title:o,completed:n})=>`
      <li data-id="${r}" class="list-item">
        <input type="checkbox" class="list-checkbox" ${n&&"checked"}>
        <h2 class="list-title">${o.length>15?o.slice(0,15)+"...":o}</h2>
        <button class="list-btn">X</button>
      </li>
    `).join("")}async function f(e){e.preventDefault();const{todo:r}=e.currentTarget.elements;if(!r.value.trim()){alert("Please enter a task.");return}try{const n={title:r.value,completed:!1},t=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok)throw new Error("Failed to add task.");const s=await t.json();a.insertAdjacentHTML("beforeend",u([s])),d.reset()}catch(n){console.error("Failed to add task:",n.message)}}async function h(e){if(!e.target.classList.contains("list-checkbox"))return;e.preventDefault();const o=e.target.closest(".list-item").dataset.id;try{await l(`${c}/${o}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:e.target.checked})}),e.target.checked=!e.target.checked}catch(n){console.error("Failed to update task:",n.message)}}function p(e){if(!e.target.classList.contains("list-btn"))return;const r=e.target.closest(".list-item"),o=r.dataset.id;l(`${c}/${o}`,{method:"DELETE"}).then(()=>{r.remove()}).catch(n=>{console.error("Failed to delete task:",n.message)})}
//# sourceMappingURL=commonHelpers.js.map
