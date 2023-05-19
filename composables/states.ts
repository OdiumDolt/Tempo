const useTheme = () => useState<string>('color', () => 'dark-mode')
const useTracker = () => useState<Tracker[]>('local_trackers', () => [])

export {
    useTheme,
    useTracker
}