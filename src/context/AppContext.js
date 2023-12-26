import react from 'react'

const ThemeContext = react.createContext({
  darkMode: false,
  activeTabId: '',
  reactedList: [],
  savedList: [],
  toggleTheme: () => {},
  updateActiveTabId: () => {},
  updateReactedVideos: () => {},
  updateSavedVideos: () => {},
})
export default ThemeContext
