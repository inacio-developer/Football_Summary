import Select from "./src/Components/selectOptions.js";
import changeLeague from "./src/Components/changeSelectLeague.js";
import BtnIndex from "./src/Components/btnIndex.js";
import ResultData from "./src/Components/resultData.js";
import Modal from "./src/Components/modal.js";
import Load from "./src/Components/loadResult.js";

const league = new Select("leagues", "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php");

const btn = new BtnIndex(".btn-index", "#leagues", "#teams" );

const data = new ResultData(...["name", "nation", "stadium", "website", "badge", 
                                "svg-color", "anchorIcons", "modal", "text-history"]
                            );

const modal = new Modal("btn-open", "btn-close", "modal");

const load = new Load("loading-screen", "badge", "main-result");

changeLeague("leagues")
league.init();
btn.init();
data.init();
modal.init();
load.init();