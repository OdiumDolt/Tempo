interface capture {
    id:string;
    index:number;
    status:number
    date:Date
    graph_satus: number
}

interface Tracker {
    url: string,
    interval: string,
    history: capture[],
    user_id: string,
    active: boolean,
}