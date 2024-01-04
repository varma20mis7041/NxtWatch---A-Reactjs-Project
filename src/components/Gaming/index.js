import {Component} from 'react'
import Cookies from 'js-cookie'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingRouteLeftSideAndVideosContainer,
  GamingVideosBackgroundContainer,
  GamingVideosTopContainer,
  GamingIconContainer,
  GamingHeadingText,
  GamingVideosUnOrderedListContainer,
  StyledGamingIcon,
  RouteContentContainer,
  NoVideosContainer,
  NoVideosImgElement,
  NoVideoHeadingText,
  NoVideosRetryButton,
} from './StyledComponents'

import LeftSideBar from '../LeftSideBar'
import LoadingView from '../LoadingView'

const gamingActiveStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    activeState: gamingActiveStates.initial,
    isGamingTabUpdated: false,
    gamingList: [],
  }

  componentDidMount() {
    this.fetchGamingVideosList()
  }

  fetchGamingVideosList = async () => {
    this.setState({activeState: gamingActiveStates.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const result = await response.json()
      // console.log('result', result.videos)
      const updatedGamingList = result.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingList: updatedGamingList,
        activeState: gamingActiveStates.success,
      })
    } else {
      this.setState({activeState: gamingActiveStates.failure})
    }
  }

  onClickFailureRetry = () => this.fetchGamingVideosList()

  displayGamingRouteLoadingView = () => <LoadingView />

  displayGamingRouteSuccessView = () => {
    const {gamingList} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <GamingVideosBackgroundContainer>
              <GamingVideosTopContainer darkMode={darkMode}>
                <GamingIconContainer darkMode={darkMode}>
                  <StyledGamingIcon color="#ff0b37" />
                </GamingIconContainer>
                <GamingHeadingText darkMode={darkMode}>
                  Gaming
                </GamingHeadingText>
              </GamingVideosTopContainer>
              <GamingVideosUnOrderedListContainer darkMode={darkMode}>
                {gamingList.map(eachItem => (
                  <GamingVideoItem videoDetails={eachItem} key={eachItem.id} />
                ))}
              </GamingVideosUnOrderedListContainer>
            </GamingVideosBackgroundContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  displayGamingRouteFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoVideosContainer darkMode={darkMode}>
            <NoVideosImgElement
              failure="true"
              src={`${
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }`}
              alt="failure view"
            />
            <NoVideoHeadingText title="true" darkMode={darkMode}>
              Oops! Something Went Wrong
            </NoVideoHeadingText>
            <NoVideoHeadingText darkMode={darkMode} as="p">
              We are having some trouble to complete your request.Please try
              again
            </NoVideoHeadingText>
            <NoVideosRetryButton
              onClick={this.onClickFailureRetry}
              type="button"
            >
              Retry
            </NoVideosRetryButton>
          </NoVideosContainer>
        )
      }}
    </AppContext.Consumer>
  )

  displayGamingView = () => {
    const {activeState} = this.state
    switch (activeState) {
      case gamingActiveStates.loading:
        return this.displayGamingRouteLoadingView()
      case gamingActiveStates.success:
        return this.displayGamingRouteSuccessView()
      case gamingActiveStates.failure:
        return this.displayGamingRouteFailureView()
      default:
        return null
    }
  }

  render() {
    const {isGamingTabUpdated} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode, updateActiveTabId} = value
          if (!isGamingTabUpdated) {
            this.setState(
              {isGamingTabUpdated: true},
              updateActiveTabId('GAMING'),
            )
          }
          return (
            <>
              <Header />
              <GamingRouteLeftSideAndVideosContainer darkMode={darkMode}>
                <LeftSideBar />
                <RouteContentContainer data-testid="gaming" darkMode={darkMode}>
                  {this.displayGamingView()}
                </RouteContentContainer>
              </GamingRouteLeftSideAndVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
