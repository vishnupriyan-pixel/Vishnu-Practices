const template = document.createElement('template');
template.innerHTML = `
<style>
.box{
    height: 200px;
    width: 650px;
    border: 1px solid #bfbfbf;
    box-shadow: 1px 3px 6px 4px #f8f8f8;
}
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
}
.slide{
    height: 15px;
    width: 90%;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
    position: relative;
}
#handler{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #c5c5c5;
    background: #f5f5f5;
    top: -4px;
}
</style>

<div class='box'>
    <div class='main'>
    <div class='slide'>
        <span id='handler'></span>
    </div>
    </div>
</div>
`;

class slider extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }

    sliderMove(){
        const indicator = this.shadowRoot.querySelector('#handler');
        indicator.style.left = '10%'
    }
    

    connectedCallback() {
        this.shadowRoot.querySelector('#handler').addEventListener('mousedown', ()=> this.sliderMove());
    }
}

customElements.define('slider-drag',slider);
