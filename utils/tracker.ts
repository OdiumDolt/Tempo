interface capture {
    id:string;
    index:number;
    status:number
    date:Date
    graph_satus: number
}

interface Tracker {
    url: string,
    interval: number,
    history: capture[],
    user_id: string,
    active: boolean,
    name: string,
}

class UserTrackers {
    trackers: Tracker[];
    user_id: string;
    email: string;
    constructor(
        trackers: Tracker[],
        user_id: string,
        email: string
    ){
        this.trackers = trackers
        this.user_id = user_id
        this.email = email
    }
}