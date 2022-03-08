const template = document.createElement('template');
template.innerHTML = `
<style>
.main{
    display: flex;
	box-shadow: 0px 1px 1px 1px #eee;
	cursor: pointer;
	width: 560px;
    height: 150px;
}
.details{
    outline: 0px solid black;
	width: 10%;
	height: auto;
	display: flex;
	flex-direction: column;
	border-right: 1px solid #cccccc;
	border-left: 0px solid black;
	border-top: 0px solid black;
	border-bottom: 0px solid black;
	cursor: text;
}
#answer{
	width: auto;
	height: 49px;
	max-height: 49px;
	border-bottom: 1px solid #2bc3a1;
	min-width: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#ans-head1{
    font-size:14px;
}
#ans-head2{
    font-size:16px;
    font-weight: 700;
}
#score{
    width: 100%;
	height: 49px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: auto;
    border-bottom: 1px solid #cccccc;
}
#view{
    width: 100%;
	height: 49px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: auto;
}
.content{
    background-color: #FFF;
	cursor: pointer;
	min-width: auto;
	min-height: auto;
}
.list{
    padding-left: 13px;
	line-height: 24px;
	min-width: auto;
	min-height: auto;
    display: flex;
    flex-direction: column;
}
#content-head{
    font-size: 20px;
	font-weight: 700;
	letter-spacing: 0.3px;
	padding-left: 10px;
	padding-right: 42px;
	padding-bottom: 0px;
	padding-top: 0px;
	margin-top: 12px;
}
#content-head a{
    text-decoration: none;
    color: #000;
}
#content-details{
    font-size: 15px;
	white-space: normal;
	padding-right: 28px;
	padding-left: 10px;
	padding-top: 0px;
	padding-bottom: 0px;
	color: #000;
	letter-spacing: 0.2px;
	margin-top: 9px;
}
.footer-list{
    align-items: flex-end;
	padding-bottom: 7px;
}
.main:hover{
    box-shadow: 0 1px 16px 2px #dedede;
    cursor:pointer;
}
</style>

<div class='main'>
    <div class='details'>
      <div id='answer'>
        <span id='ans-head1'>Answer</span>
        <span id='ans-head2'></span>
      </div>
      <div id='score'>
      <span id='ans-head1'>Score</span>
      <span id='ans-head2'></span>
      </div>
      <div id='view'>
      <span id='ans-head1'>View</span>
      <span id='ans-head2'></span>
      </div>
    </div>
        <div class='content'>
            <div class='list'>
            <span id='content-head'>
                <a href="#"></a>
            </span>
            <span id='content-details'></span>
               <div class='footer-list'>
               
               </div>
            </div>
        </div
</div>
`;

class quesCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }
}

customElements.define('ques-card',quesCard);