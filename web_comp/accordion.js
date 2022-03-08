const template = document.createElement('template');
template.innerHTML = `
<style>
.box{
height: auto;
width: 600px;
background: #f8f9fa;
border-radius: 4px;
border: 1px solid #dee2e6;
}
.list{
    padding: 15px;  
}
#data1{
    width: 100%;
    transition: .4s;
    font-size: 17px;
    border: 1px solid #86b7fe;
    box-shadow: 0 0 0 1px #0d6efd40;
    padding: 0.7rem 1.15rem;
    display: flex;
    background: #fff;
    cursor: pointer;
}
#data2{
    width: 100%;
    transition: .4s;
    font-size: 17px;
    border: 1px solid #86b7fe;
    box-shadow: 0 0 0 1px #0d6efd40;
    padding: 0.7rem 1.15rem;
    display: flex;
    background: #fff;
    cursor: pointer;
}
#data3{
    width: 100%;
    transition: .4s;
    font-size: 17px;
    border: 1px solid #86b7fe;
    box-shadow: 0 0 0 1px #0d6efd40;
    padding: 0.7rem 1.15rem;
    display: flex;
    background: #fff;
    cursor: pointer;
}
.details{
    display:none;
}
.details p {
    margin-left: 20px;
}
.details1 p {
    margin-left: 20px;
}
.details2 p {
    margin-left: 20px;
}
.details1{
    display:none;
}
.details2{
    display:none;
}

</style>
<div class='box'>
    <div class='list'>
        <button id='data1'>Nature</button>
        <div class='details'>
           <p>
           Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.
           </p>
        </div>
        <button id='data2'>Flowers</button>
        <div class='details1'>
        <p>
        A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Magnoliophyta, also called angiosperms). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs.
        </p>
     </div>
        <button id='data3'>Birds</button>
        <div class='details2'>
        <p>
        Birds are a group of warm-blooded vertebrates constituting the class Aves /ˈeɪviːz/, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.Birds live worldwide and range in size from the 5.5 cm. 
        </p>
     </div>
    </div>
</div>
`;

class accordion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    toggleData() {
        this.infoList = !this.infoList;
        const category = this.shadowRoot.querySelector('#data1')
        const info = this.shadowRoot.querySelector('.details');
        if(this.infoList){
            info.style.display = 'flex';
            category.style.color = '#0c63e4';
            category.style.backgroundColor = '#e7f1ff';
        }
        else{
            info.style.display = 'none';
            category.style.color = '#000';
            category.style.backgroundColor = '#fff';
        }

        
    }

    toggleData1() {
        this.infoList = !this.infoList;
        const category = this.shadowRoot.querySelector('#data2');
        const info = this.shadowRoot.querySelector('.details1');
        if(this.infoList){
            info.style.display = 'flex';
            category.style.color = '#0c63e4';
            category.style.backgroundColor = '#e7f1ff';
        }
        else{
            info.style.display = 'none';
            category.style.color = '#000';
            category.style.backgroundColor = '#fff';
        }

        
    }
    toggleData2() {
        this.infoList = !this.infoList;
        const category = this.shadowRoot.querySelector('#data3');
        const info = this.shadowRoot.querySelector('.details2');
        if(this.infoList){
            info.style.display = 'flex';
            category.style.color = '#0c63e4';
            category.style.backgroundColor = '#e7f1ff';
        }
        else{
            info.style.display = 'none';
            category.style.color = '#000';
            category.style.backgroundColor = '#fff';
        }

        
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#data1').addEventListener('click', ()=> this.toggleData());
        this.shadowRoot.querySelector('#data2').addEventListener('click', ()=> this.toggleData1());
        this.shadowRoot.querySelector('#data3').addEventListener('click', ()=> this.toggleData2());
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#data1').removeEventListener();
        this.shadowRoot.querySelector('#data2').removeEventListener();
        this.shadowRoot.querySelector('#data3').removeEventListener();
    }

}    
customElements.define('accordion-list',accordion);