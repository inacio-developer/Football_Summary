import Select from "./src/Components/selectOptions.js";
import changeLeague from "./src/Components/changeSelectLeague.js";


const league = new Select("leagues", "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")

league.init();

changeLeague("leagues")