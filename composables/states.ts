const useTheme = () => useState<string>('color', () => 'dark-mode')
const useTracker = () => useState<Tracker[]>('local_trackers', () => [])
const useHistory = () => useState<capture[]>('tracker_histories', () => [])

export {
    useTheme,
    useTracker
}