import Select from "./src/Components/selectOptions.js";
import changeLeague from "./src/Components/changeSelectLeague.js";
import btnIndex from "./src/Components/btnIndex.js";
import resultData from "./src/Components/resultData.js";

const league = new Select("leagues", "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php");
const btn = new btnIndex(".btn-index", "#leagues", "#teams" );
const data = new resultData(...["name", "nation", "stadium", "website", "badge", 
                                "svg-color", "anchorIcons", "modal", "text-history"]
                            );


changeLeague("leagues")
league.init();
btn.init();
data.init();