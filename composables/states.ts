const useTheme = () => useState<string>('color', () => 'dark-mode')
const useTracker = () => useState<Tracker[]>('local_trackers', () => [])
const useCurrentCaptures = () => useState<capture[]>('tracker_histories', () => [])
const useCurrentTracker = () => useState<Tracker | null>('current_tracker', () => null)

export {
    useTheme,
    useTracker,
    useCurrentTracker,
    useCurrentCaptures
}