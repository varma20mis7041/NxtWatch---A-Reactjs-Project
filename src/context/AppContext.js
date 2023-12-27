import React from 'react'

const AppContext = React.createContext({
  darkMode: false,
  activeTabId: '',
  reactedList: [],
  savedList: [],
  toggleTheme: () => {},
  updateActiveTabId: () => {},
  updateReactedVideos: () => {},
  updateSavedVideos: () => {},
})
export default AppContext
