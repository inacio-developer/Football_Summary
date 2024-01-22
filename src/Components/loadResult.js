export default class Load{
    constructor(load, img, page) {
        this.load = document.querySelector("." + load)
        this.img = document.querySelector("." + img);
        this.page = document.querySelector("." + page)
    }

    loading(){
        this.page.style.filter= "none";
        this.load.style.display = "none";
    }

    addEvents(){
        this.img.addEventListener("load", this.loading)
    }

    bind() {
        this.loading = this.loading.bind(this);
    }

    init(){
        if(this.load && this.img && this.page) {
            this.bind();
            this.addEvents();
        }
    }
}