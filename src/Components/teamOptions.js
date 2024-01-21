import Select from "./selectOptions.js";

export function teamOptions(league){
    toClean();
    const params = stringConstruction(league);
    requestAPI(params)
}

function requestAPI(params){
    const team = new Select("teams", "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=" + params);
    team.init();
}

export function stringConstruction(string){
    const valueArray = string.split(" ");
    let params = "";

        for(let i = 0; i < valueArray.length; i++){
            i != valueArray.length - 1 ? params += valueArray[i] + "%20" : params += valueArray[i];
        }

        return params
}


function toClean(){
    const element = document.querySelector("#teams");

    element.innerHTML = '<option value="" disabled selected>Team</option>';
}