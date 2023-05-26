function generate_dates(time:number, interval:number) : Date[]{
    var dates: Date[] = []
    for(let i = 0; i < time/interval; i++){
        let new_date = new Date()
        new_date.setHours(new_date.getHours() - (time + (i * interval)))
        dates.push(new_date)
    }
    return dates
}

export {
    generate_dates
}