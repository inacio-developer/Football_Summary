import Select from "./selectOptions.js";

export default function teamOptions(league){
    toClean();

    const valueArray = league.split(" ");
    let params = "";

        for(let i = 0; i < valueArray.length; i++){
            i != valueArray.length - 1 ? params += valueArray[i] + "%20" : params += valueArray[i];
        }

        const team = new Select("teams", "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=" + params);



        team.init();
}

function toClean(){
    const element = document.querySelector("#teams");

    element.innerHTML = '<option value="" disabled selected>Team</option>';
}