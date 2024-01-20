import teamOptions from "./teamOptions.js";

export default function changeLeague(element){
    const select = document.querySelector("#" + element);

    select.addEventListener("change", () => {
        teamOptions(select.value)
    })
}