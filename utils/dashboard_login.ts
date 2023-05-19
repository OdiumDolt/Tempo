// Attempt to get the row of the user, with their websites_trackers data

import { tr } from "@faker-js/faker"

// if the request sees any errors, it will attempt to resolve them, and make the request again.
async function get_user_trackers(client:any, user:any) {
    let i = 0
    
    while (i < 10){

        var { data, error }: {data: any, error:any | null} = await client.from("userTrackingData").select("trackers").eq("user_id", user.id).single()

        // create a new table in userTrackingData if the user doesnt have one currently
        if (error?.code == "PGRST116"){
            
            console.warn("Row in userTrackingData for user_id not found, creating one now...")

            
            // create the new table, and retry a request to the server
            await client.from("userTrackingData").insert({'user_id':user.id})
        }
        
        // if no errors occured, return the data object
        else{
            return data
        }
        
        // iteratate the counter
        i++
    }
    throw new Error("Not able to get userTrackingData")
}

async function get_tracker_history(client:any, user:any, tracker:Tracker) {
    await client.from('trackers').select('history').eq('id', tracker.history_id)[tracker.history_id]
}

async function add_tracker_history(client:any, user:any, tracker:Tracker){
    return await client.from('trackers').insert({'id': tracker.history_id, 'interval': tracker.interval})
}

async function add_tracker_database(user:any, client:any, tracker:Tracker){
    let current_trackers = useTracker()
    current_trackers.value.unshift(tracker)
    await add_tracker_history(client, user, tracker)
    await client.from('userTrackingData').update({'trackers': current_trackers.value}).eq("user_id", user.id)
}

export {
    get_user_trackers,
    add_tracker_database
}