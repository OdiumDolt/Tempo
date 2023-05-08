// Attempt to get the row of the user, with their websites_trackers data
// if the request sees any errors, it will attempt to resolve them, and make the request again.
async function get_user_trackers(client:any, user:any) {
    let i = 0
    
    while (i < 10){

        var { data, error }: {data: any, error:any | null} = await client.from("userTrackingData").select("website_trackers").eq("user_id", user.id).single()

        // create a new table in userTrackingData if the user doesnt have one currently
        if (error?.code == "PGRST116"){
            
            console.warn("Row in userTrackingData for user_id not found, creating one now...")

            const user_data:any = {
                user_id: user.id
            }
            
            // create the new table, and retry a request to the server
            await client.from("userTrackingData").insert(user_data)
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

export {
    get_user_trackers
}