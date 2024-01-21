import API from "./APIRequest.js";

export default class Select {
    constructor(select, url) {
        this.select = document.querySelector("#" + select);
        this.url = url;
        this.option = select;
    }

    insertValues(list){
        list.forEach((element) => {
            const createElement = document.createElement("option");
            createElement.innerText = element
            createElement.setAttribute("value", element);
            
            this.select.appendChild(createElement);
        })
    }

    values(value){
        const order = []; 

        value[this.option].forEach((element, i) => {
            if(element.strSport === "Soccer" && element.strLeague != "_No League"){

                const path = "str" + this.option[0].toUpperCase() + this.option.substring(1).slice(0, -1)

                order[i] = element[path];
            }
        })

        this.insertValues(order.sort());
    }

    async generateValues() {
        const list = await new API(this.url).request()
        this.values(list);
    }

    init(){
        if(this.select && this.url){
            this.generateValues()
        }
    }
}