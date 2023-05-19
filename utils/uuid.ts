import sha256 from 'crypto-js/sha256';

function getUUID(username:string) {
    var hash: string = sha256(username).toString();
    console.log(hash)
    return hash
}

export {getUUID}