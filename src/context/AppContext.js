import React from 'react'

const ThemeContext = React.createContext({
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
