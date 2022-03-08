const template = document.createElement("template");
template.innerHTML = `
<style>

.main{
    background-color:#F5F5F5;
    height: 100px;
    width: 400px;
    margin: auto;
    display:flex;
    border-radius: 7px;
}
.main p{
    height: 20px;
    width: 20px;
    background-color: #ee6373;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: flex;
}

</style>

    <div class="main">
    <p><slot name="page" /></p>
    </div>

`;

class pagecomp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute("page");
    }
}
customElements.define('page-comp',pagecomp);