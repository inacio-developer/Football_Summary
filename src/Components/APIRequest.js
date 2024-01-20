export default class API {
    constructor(url){
        this.url = url
    }

    async request(){
        if(this.url){
        const requestAPI = await fetch(this.url);
        const responseJson = await requestAPI.json();
        
        return responseJson;
        }
    }
}