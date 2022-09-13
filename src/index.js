import App from "./app";
import Logo from "./logo.svg"
const root = document.getElementById("root")
root.innerHTML = `
<img src="${Logo}" alt="build icon"/>
<h1>learning web tooling concept</h1>  

${App({name:"Neetu"})}`