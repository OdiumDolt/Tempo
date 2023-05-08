class LoginSession {
    
    uuid: string | undefined;
    session_token: string | undefined;
    
    constructor (){
        if (process.client){
            const uuid = localStorage.getItem('user_uuid')
            const session_token = localStorage.getItem("session_token")
            this.uuid = uuid ? uuid : undefined
            this.session_token = session_token ? session_token : undefined
        }
    }

    validLogin(): boolean{
        return this.session_token != undefined || this.uuid != undefined
    }


}

export { LoginSession }