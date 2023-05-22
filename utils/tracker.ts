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
    user_id: string,
    id: string
    active: boolean,
    name: string,
}


export {
    Tracker, 
    capture
}