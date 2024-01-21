export default class btnIndex {
    constructor(btn, field, field1){
        this.btn = document.querySelector(btn);
        this.field = document.querySelector(field);
        this.field1 = document.querySelector(field1)
    }

    search(click){
        if(this.field1.value && this.field1.value) {
            sessionStorage.clear();
            sessionStorage.setItem("league", this.field.value);
            sessionStorage.setItem("team", this.field1.value);
        } else {
            click.preventDefault();
        }
    }

    addEvents(){
        this.btn.addEventListener("click", this.search);
    }

    bind(){
        this.search = this.search.bind(this);
    }

    init(){
        if(this.btn){
            this.bind();
            this.addEvents();
        }
    }
}