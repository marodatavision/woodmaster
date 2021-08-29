export default class LogMessager {
    static responseErrorLog(error, location){
        console.log(`Response Error in ${location}`);
        console.log(error);
    }
}