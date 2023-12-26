import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import AppContext from './context/AppContext'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here

class App extends Component {
  state = {
    isDarkMode: false,
    currentRouteId: '',
    videosListReactedByUser: [],
    videosListSavedByUser: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  updateActiveTabId = tabId => {
    this.setState({currentRouteId: tabId})
  }

  updateReactedVideos = videoDetails => {
    const {videosListReactedByUser} = this.state
    const isReactedVideoPresent = videosListReactedByUser.find(
      eachItem => eachItem.id === videoDetails.id,
    )
    //  console.log('is video present:', isReactedVideoPresent)
    if (isReactedVideoPresent === undefined) {
      this.setState(prevState => ({
        videosListReactedByUser: [
          ...prevState.videosListReactedByUser,
          videoDetails,
        ],
      }))
    } else {
      const updatedReactedVideosList = videosListReactedByUser.map(
        eachVideoItem => {
          if (eachVideoItem.id === videoDetails.id) {
            return videoDetails
          }
          return eachVideoItem
        },
      )
      this.setState({videosListReactedByUser: updatedReactedVideosList})
    }
  }

  updateSavedVideos = videoDetails => {
    const {videosListSavedByUser} = this.state
    const savedVideo = videosListSavedByUser.find(
      eachSavedVideo => eachSavedVideo.id === videoDetails.id,
    )
    if (savedVideo === undefined) {
      this.setState(prevState => ({
        videosListSavedByUser: [
          ...prevState.videosListSavedByUser,
          videoDetails,
        ],
      }))
    } else {
      const updatedSavedVideos = videosListSavedByUser.map(eachItem => {
        if (eachItem.id === videoDetails.id) {
          return {...eachItem, isSaved: !eachItem.isSaved}
        }
        return eachItem
      })
      this.setState({videosListSavedByUser: updatedSavedVideos})
    }
  }

  render() {
    const {
      isDarkMode,
      currentRouteId,
      videosListReactedByUser,
      videosListSavedByUser,
    } = this.state
    // console.log('reacted_video_details:', videosListReactedByUser)
    return (
      <AppContext.Provider
        value={{
          darkMode: isDarkMode,
          activeTabId: currentRouteId,
          reactedList: videosListReactedByUser,
          savedList: videosListSavedByUser,
          toggleTheme: this.toggleTheme,
          updateActiveTabId: this.updateActiveTabId,
          updateReactedVideos: this.updateReactedVideos,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
