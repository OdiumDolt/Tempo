function get_time_in_int(str: string){
    const re_seconds = /\d+(?= s)/;
    const re_minutes = /\d+(?= min)/;
    const re_hours = /\d+(?= hr)/;
    
    let seconds_re = str.match(re_seconds)
    let seconds = seconds_re ? seconds_re[0] : null;

    let minutes_re  =str.match(re_minutes)
    let minutes = minutes_re ? minutes_re[0] : null;
    let hours_re  = str.match(re_hours)
    let hours = hours_re ? hours_re[0] : null;

    let time = 0

    if (seconds != null){
        time += parseInt(seconds)
    }
    if (minutes != null){
        time += parseInt(minutes) * 60
    }
    if (hours != null){
        time += parseInt(hours) + 3600
    }

    return time
}

export {
    get_time_in_int
}