export default class Modal{
    constructor(btnOpen, btnClose, modal){
        this.btnOpen = document.querySelector("." + btnOpen);
        this.btnClose = document.querySelector("." + btnClose)
        this.modal = document.querySelector("." + modal);
    }
    
    close(){
        this.modal.style.display = "none";
    }

    open(){
        this.modal.style.display = "flex";
    }

    addEvents(){
        this.btnOpen.addEventListener("click", this.open);
        this.btnClose.addEventListener("click", this.close);
    }
    
    bind(){
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    init(){
        if(this.btnOpen && this.btnClose && this.modal){
            this.bind();
            this.addEvents();
        }
    }
}