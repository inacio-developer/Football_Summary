import { stringConstruction } from "./teamOptions.js"; 
import API from "./APIRequest.js";

export default class ResultData {
    constructor(...data){        
        this.name = document.querySelectorAll("." + data[0]);
        this.nation = document.querySelector("." + data[1]);
        this.stadium = document.querySelector("." + data[2]);
        this.website = document.querySelector("." + data[3]);
        this.badge = document.querySelectorAll("." + data[4])
        this.icons = document.querySelectorAll("." + data[5]);
        this.iconsAnchor = document.querySelectorAll("." + data[6]);
        this.modal = document.querySelector("." + data[7]);
        this.history = document.querySelector("." + data[8]);
    }
    
    socialLinks(team) {
        this.iconsAnchor.forEach(icon => {
            icon.href = team["str" + icon.title] ? 
            "https://" + team["str" + icon.title] : icon.title = "unavailable";
        })
    }

    colorPalette(team) {
        if(!team.strKitColour1 || team.strKitColour1.toUpperCase() === "#FFFFFF" ) {
            if(team.strKitColour2) {
                const color =  team.strKitColour2;

                document.body.style.backgroundColor = color;

                this.icons.forEach((icon) => icon.style.fill = color);    
            } else {
                document.body.style.backgroundColor = '#F2EDE4';

                this.icons.forEach((icon) => icon.style.fill = "#A69C8B")
            }

            this.modal.style.backgroundColor = "#FFFFFF";
        } else {
            document.body.style.backgroundColor = team.strKitColour1;

            this.icons.forEach((icon) => icon.style.fill =  team.strKitColour1);

            if(team.strKitColour2 === "#000000" || team.strKitColour2 === "#010101") this.modal.style.color = "#FFFFFF";
            
            this.modal.style.backgroundColor = team.strKitColour2 ? team.strKitColour2 : "#FFFFFF";
        }
    }

    teamShield(team) {
        if(team.strTeamBadge) {
            this.badge.forEach((badge) => {
                badge.src =  team.strTeamBadge;
                badge.alt = "Badge " + team.strTeam;
            })
        } else {
            this.badge.forEach((badge) => {
                badge.src = "./src/assets/img/Image_unavailable.png";
            })
        }
    }

    generalData(team){
        this.name.forEach(name => name.innerText =  team.strAlternate ? team.strAlternate : team.strTeam);
        this.nation.innerText = team.strCountry ? team.strCountry : "Information unavailable";
        this.stadium.innerText = team.strStadium ? team.strStadium : "Information unavailable";
        this.website.innerText = team.strWebsite ? team.strWebsite : "Information unavailable";
        this.website.href = team.strWebsite ? "https://" + team.strWebsite : "#";
        this.history.innerHTML = team.strDescriptionEN ? team.strDescriptionEN : "Team history currently unavailable, sorry"
    }

    insertData(data){
        data.teams.forEach((team) => {
            if(team.strTeam === sessionStorage.getItem("team")) {
                console.log(team)
                this.generalData(team);
                this.teamShield(team);
                this.colorPalette(team);
                this.socialLinks(team)
            };
        })
    }

    async database(){
        let params = sessionStorage.getItem("league");
        
        params = stringConstruction(params);

        const data = await new API("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=" + params).request();

        this.insertData(data);
    }

    init(){
        if(this.name && this.nation && this.stadium && this.website && this.badge &&
            this.icons && this.iconsAnchor && this.modal && this.history)
            this.database()
    }
}