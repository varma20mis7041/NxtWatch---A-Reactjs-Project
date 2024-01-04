import {Component} from 'react'
import Header from '../Header'
import LeftSideBar from '../LeftSideBar'
import AppContext from '../../context/AppContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosBackgroundContainer,
  SavedVideosTopSectionContainer,
  SavedIconContainer,
  SavedVideosUnOrderListContainer,
  SavedVideosMainHeadingText,
  SavedAndLeftBarContainer,
  NoVideosContainer,
  NoVideosImgElement,
  NoVideoHeadingText,
  StyledSaveIcon,
  RouteContentContainer,
} from './StyledComponents'

class SavedVideos extends Component {
  state = {
    isActiveTabUpdated: false,
  }

  displayNoVideosView = () => (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoVideosContainer darkMode={darkMode}>
            <NoVideosImgElement
              failure="true"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideoHeadingText title="true" darkMode={darkMode}>
              No saved videos found
            </NoVideoHeadingText>
            <NoVideoHeadingText darkMode={darkMode} as="p">
              You can save your videos while watching them
            </NoVideoHeadingText>
          </NoVideosContainer>
        )
      }}
    </AppContext.Consumer>
  )

  displaySavedVideos = savedVideos => (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <SavedVideosBackgroundContainer>
            <SavedVideosTopSectionContainer darkMode={darkMode}>
              <SavedIconContainer darkMode={darkMode}>
                <StyledSaveIcon color="#ff0b37" />
              </SavedIconContainer>
              <SavedVideosMainHeadingText darkMode={darkMode} as="h1">
                Saved Videos
              </SavedVideosMainHeadingText>
            </SavedVideosTopSectionContainer>
            <SavedVideosUnOrderListContainer darkMode={darkMode}>
              {savedVideos.map(eachItem => (
                <SavedVideoItem videoDetails={eachItem} key={eachItem.id} />
              ))}
            </SavedVideosUnOrderListContainer>
          </SavedVideosBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )

  displaySavedVideosSectionView = () => (
    <AppContext.Consumer>
      {value => {
        const {savedList} = value
        const savedVideos = savedList.filter(
          eachVideo => eachVideo.isSaved === true,
        )
        return savedVideos.length === 0
          ? this.displayNoVideosView()
          : this.displaySavedVideos(savedVideos)
      }}
    </AppContext.Consumer>
  )

  render() {
    const {isActiveTabUpdated} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {updateActiveTabId, darkMode} = value
          if (!isActiveTabUpdated) {
            this.setState(
              {isActiveTabUpdated: true},
              updateActiveTabId('SAVED VIDEOS'),
            )
          }
          return (
            <>
              <Header />
              <SavedAndLeftBarContainer darkMode={darkMode}>
                <LeftSideBar />

                <RouteContentContainer
                  data-testid="savedVideos"
                  darkMode={darkMode}
                >
                  {this.displaySavedVideosSectionView()}
                </RouteContentContainer>
              </SavedAndLeftBarContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default SavedVideos
