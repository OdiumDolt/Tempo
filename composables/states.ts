const useTheme = () => useState<string>('color', () => 'dark-mode')
const useTrackers = () => useState<Tracker[]>('local_trackers', () => [])
const useCurrentCaptures = () => useState<capture[]>('captures', () => [])
const useCurrentTracker = () => useState<Tracker | null>('tracker', () => null)

var localDate = new Date();
var utcTime = localDate.getTime()
var utcDate = new Date(utcTime);
utcDate.setDate(utcDate.getDate() - 1)

const useCurrentTimeFrame = () => useState<Date>('timeframe', () => utcDate)


export {
    useTheme,
    useTrackers,
    useCurrentTracker,
    useCurrentCaptures,
    useCurrentTimeFrame
}