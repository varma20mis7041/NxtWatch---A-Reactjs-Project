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

import {LeftSideBarDesktopViewContainer} from '../TabsDisplayStyledComponents'

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

  displaySavedVideos = () => (
    <AppContext.Consumer>
      {value => {
        const {savedList, darkMode} = value
        console.log(savedList)

        return (
          <SavedVideosBackgroundContainer>
            <SavedVideosTopSectionContainer darkMode={darkMode}>
              <SavedIconContainer darkMode={darkMode}>
                <StyledSaveIcon color="#ff0b37" />
              </SavedIconContainer>
              <SavedVideosMainHeadingText darkMode={darkMode}>
                Saved videos
              </SavedVideosMainHeadingText>
            </SavedVideosTopSectionContainer>
            <SavedVideosUnOrderListContainer darkMode={darkMode}>
              {savedList.map(eachItem => (
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
        return savedList.length === 0
          ? this.displayNoVideosView()
          : this.displaySavedVideos()
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
                <LeftSideBarDesktopViewContainer>
                  <LeftSideBar />
                </LeftSideBarDesktopViewContainer>
                <RouteContentContainer>
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
