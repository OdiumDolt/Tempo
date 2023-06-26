// Attempt to get the row of the user, with their websites_trackers data

// if the request sees any errors, it will attempt to resolve them, and make the request again.
async function get_user_trackers(client:any, user:any) {

    var { data, error }: {data: Tracker[], error:any | null} = await client.from("trackers").select().order('created_at', { ascending: false })
    if (error != null){
        throw new Error(error)
    }
    return data
        
}

async function get_tracker_history(client:any, user:any, tracker:Tracker, date: Date) {
    var { data, error } = await client.from('captures').select("*").eq('tracker_id', tracker.id).gt("date", date.toISOString())
    return data
}

async function add_tracker_database(client:any, user:any, tracker:Tracker){
    return await client.from('trackers').insert(tracker)
}

async function change_tracker_name(client:any, user:any, tracker:Tracker) {
    return await client.from('trackers').update({'name':tracker.name}).eq('id', tracker.id)
}

async function change_tracker_active(client:any, user:any, tracker:Tracker){
    return await client.from('trackers').update({'active':tracker.active}).eq('id', tracker.id)
}

async function add_tracker(user:any, client:any, tracker:Tracker){
    let current_trackers = useTrackers()
    
    current_trackers.value.unshift(tracker)
    
    await add_tracker_database(client, user, tracker)
}

export {
    get_user_trackers,
    add_tracker,
    change_tracker_name,
    change_tracker_active,
    get_tracker_history
}