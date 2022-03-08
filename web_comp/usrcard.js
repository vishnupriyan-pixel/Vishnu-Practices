// class usrcard extends HTMLElement {
//     constructor() {
//         super();
//         this.innerHTML = 'User1';
//         this.style.backgroundColor='red';
//         this.style.color='#FFF';
//         // this.innerHTML = `${this.getAttribute('name')}`;
//     }
// }
// window.customElements.define('user-card',usrcard);


//---------creating a shadow DOM---------//
const template = document.createElement('template');
template.innerHTML = `
<style>
   .card1{
       font-family: 'Arial' San-serif;
       background: #F4F4F4;
       width: 400px;
       display:grid;
       grid-template-columns: 1fr 2fr;
       grid-gap: 10px;
       border-bottom: darkorchid 5px solid;
   }
   .card1 img {
       width: 100%;
   }
   .card1 button{
       cursor: pointer;
       background: darkorchid;
       color: #fff;
       border-radius:5px;
       padding: 5px 10px;
       border:0;
       margin-bottom: 15px; 
   }
</style>

<div class="card1">
   <img />
      <div>
   <h3></h3>
        <div class="details">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
       </div>
   <button id="toggle-data">Hide Data</button>
   </div>
</div>
`;
class usrcard1 extends HTMLElement {
    constructor() {
        super();
        this.infoList = true;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute("name");
        this.shadowRoot.querySelector('img').src = this.getAttribute("avatar");
    }

    toggleData() {
        this.infoList = !this.infoList;

        const info = this.shadowRoot.querySelector('.details');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-data');
        if(this.infoList){
            info.style.display = 'block';
            toggleBtn.innerHTML = 'Hide Data';
        }
        else{
            info.style.display = 'none';
            toggleBtn.innerHTML = 'Show Data';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-data').addEventListener('click', ()=> this.toggleData());
    }
    disconnectedCallback(){ 
        this.shadowRoot.querySelector('#toggle-data').removeEventListener();  
    }

    
}


customElements.define('user-flow',usrcard1);