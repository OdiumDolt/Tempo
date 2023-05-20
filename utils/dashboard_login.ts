// Attempt to get the row of the user, with their websites_trackers data

// if the request sees any errors, it will attempt to resolve them, and make the request again.
async function get_user_trackers(client:any, user:any) {

    var { data, error }: {data: Tracker[], error:any | null} = await client.from("trackers").select().eq('user_id', user.id)
    
    if (error != null){
        throw new Error(error)
    }
    return data
        
}

// async function get_tracker_history(client:any, user:any, tracker:Tracker) {
//     await client.from('trackers').select('history').eq('id', tracker.history_id)[tracker.history_id]
// }

async function add_tracker_database(client:any, user:any, tracker:Tracker){
    return await client.from('trackers').insert(tracker)
}

async function add_tracker_history(client:any, user:any, tracker:Tracker){
    return await client.from('trackingHistory').insert({'id':tracker.id})
}

async function add_tracker_user(user:any, client:any, tracker:Tracker){
    let current_trackers = useTracker()
    
    current_trackers.value.unshift(tracker)
    
    await add_tracker_database(client, user, tracker)
    await add_tracker_history(client, user, tracker)
    
    let tracker_ids: string[] = []
    current_trackers.value.forEach(element => {
        if (element.id != null){
            tracker_ids.push(element.id)
        }
    });
    

    // await client.from('userData').update({'trackers': tracker_ids}).eq("user_id", user.id)
}

export {
    get_user_trackers,
    add_tracker_user,
}