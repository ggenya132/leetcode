const element = document.createElement("div");
const shadowEl = element.attachShadow({ mode: "open" });

shadowEl.innerHTML = "<h1>SUP BITCH</h1>";

document.body.appendChild(element);
