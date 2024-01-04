import {Component} from 'react'
import Cookies from 'js-cookie'
import LoadingView from '../LoadingView'
import Header from '../Header'
import LeftSideBar from '../LeftSideBar'
import AppContext from '../../context/AppContext'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingAndLeftBarContainer,
  TrendingVideosBackgroundContainer,
  TrendingVideosHeadingContainer,
  TrendingMainHeadingText,
  TrendingFireIconContainer,
  StyledFireIcon,
  TrendingVideosUnOrderListContainer,
  NoVideosContainer,
  NoVideosImgElement,
  NoVideoHeadingText,
  NoVideosRetryButton,
  RouteContentContainer,
} from './StyledComponents'

const trendingActiveStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    activeState: trendingActiveStates.initial,
    isActiveTabUpdated: false,
  }

  componentDidMount() {
    this.setState({activeState: trendingActiveStates.loading})
    this.fetchTrendingVideosList()
  }

  fetchTrendingVideosList = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    // console.log('trending_section_response:', response.ok)
    if (response.ok === true) {
      const apiResult = await response.json()
      // console.log('api_results:', apiResult.videos)
      const videosList = apiResult.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideosList: videosList,
        activeState: trendingActiveStates.success,
      })
    } else {
      this.setState({activeState: trendingActiveStates.failure})
    }
  }

  onClickFailureRetry = () => this.fetchTrendingVideosList()

  displayTrendingSectionLoadingView = () => <LoadingView />

  displayTrendingSectionSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <TrendingVideosBackgroundContainer>
              <TrendingVideosHeadingContainer darkMode={darkMode}>
                <TrendingFireIconContainer darkMode={darkMode}>
                  <StyledFireIcon color="#ff0b37" />
                </TrendingFireIconContainer>
                <TrendingMainHeadingText darkMode={darkMode}>
                  Trending
                </TrendingMainHeadingText>
              </TrendingVideosHeadingContainer>
              <TrendingVideosUnOrderListContainer darkMode={darkMode}>
                {trendingVideosList.map(eachItem => (
                  <TrendingVideoItem
                    videoDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </TrendingVideosUnOrderListContainer>
            </TrendingVideosBackgroundContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  displayTrendingSectionFailureView = () => (
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

  displayTrendingView = () => {
    const {activeState} = this.state
    switch (activeState) {
      case trendingActiveStates.loading:
        return this.displayTrendingSectionLoadingView()
      case trendingActiveStates.success:
        return this.displayTrendingSectionSuccessView()
      case trendingActiveStates.failure:
        return this.displayTrendingSectionFailureView()
      default:
        return null
    }
  }

  render() {
    const {isActiveTabUpdated} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {updateActiveTabId, darkMode} = value
          if (!isActiveTabUpdated) {
            this.setState(
              {isActiveTabUpdated: true},
              updateActiveTabId('TRENDING'),
            )
          }
          return (
            <>
              <Header />
              <TrendingAndLeftBarContainer darkMode={darkMode}>
                <LeftSideBar />

                <RouteContentContainer
                  data-testid="trending"
                  darkMode={darkMode}
                >
                  {this.displayTrendingView()}
                </RouteContentContainer>
              </TrendingAndLeftBarContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Trending
