const template = document.createElement('template');
template.innerHTML = `
<style>
.box{
    margin: 0 auto;
    max-width: 32%;
}
input{
    border-radius: 32px;
	border: 1px solid #fff;
	outline: 0px solid black;
	width: 65%;
	height: 40px;
	align-self: center;
	background-color: #F5F5F5;
	font-size: 15px;
    position: relative;
    padding-left: 25px;
}
.search-icon{
    background-size: 732px 377px;
	background-repeat: no-repeat;
	background-position: 113.7% 0%;
    background-image: url(https://www.clipartmax.com/png/middle/243-2437538_png-file-ios-search-icon-png.png);
    position: absolute;
    height: 25px;
    width: 25px;
}
</style>

<div class='box'>
    <input placeholder='     Search....'    >
    <span class='search-icon'></span>
</div>
`;


class searchBox extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    searchAnimate(){
        const search = this.shadowRoot.querySelector('input');
        search.style.width = '100%';
        search.style.boxShadow = '0 1px 4px 2px #dedede';
        search.style.fontSize = '17px';
        search.style.transition = '.4s'
    }

    releaseSearch(){
        const search = this.shadowRoot.querySelector('input');
        search.style.width = '65%';
        search.style.transition = '.4s';
    }

    connectedCallback() {
        this.shadowRoot.querySelector('input').addEventListener('mouseover', ()=> this.searchAnimate());
        this.shadowRoot.querySelector('input').addEventListener('mouseout', ()=> this.releaseSearch());
    }
}

customElements.define('search-box',searchBox);