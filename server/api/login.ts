
import sha256 from 'crypto-js/sha256';

function getUUID(username:string) {
    var hash: string = sha256(username).toString();
    console.log(hash)
    return hash
}


export default defineEventHandler((event: any) => {
    var password = event.req.headers['password']
    var username = event.req.headers['username']

    // generate a uuid based on the username
    if(username == undefined || password == undefined){
        return {"type":"login_info", 'success':false}
    }
    else{
        var uuid = getUUID(username.toString())
    }
    

})