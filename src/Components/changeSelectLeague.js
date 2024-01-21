import {teamOptions} from "./teamOptions.js";

export default function changeLeague(element){
    const select = document.querySelector("#" + element);

    if(select) {
    select.addEventListener("change", () => {
        teamOptions(select.value)
    })
}
}