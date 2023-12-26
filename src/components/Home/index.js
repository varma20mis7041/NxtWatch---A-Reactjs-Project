import Cookies from 'js-cookie'
import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {HiSearch} from 'react-icons/hi'
import Header from '../Header'
import LeftSideBar from '../LeftSideBar'
import HomePageVideoItem from '../HomePageVideoItem'
import AppContext from '../../context/AppContext'
import LoadingView from '../LoadingView'

import {
  HomePageBackgroundContainer,
  HomePageVideosContainer,
  HomePageTopBannerContainer,
  HomePageVideosSection,
  BannerLeftContainer,
  BannerImageElement,
  BannerText,
  BannerButton,
  BannerCloseButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  HomeVideosUnorderedList,
  HomeRouteSectionView,
  HomePageNoVideosContainer,
  NoVideosImgElement,
  NoVideoHeadingText,
  NoVideosRetryButton,
} from './StyledComponents'
import {LeftSideBarDesktopViewContainer} from '../TabsDisplayStyledComponents'

const homePageActiveStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    currentState: homePageActiveStates.initial,
    searchInput: '',
    homeVideosList: [],
    isBannerClosed: false,
    isActiveTabUpdated: false,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({currentState: homePageActiveStates.loading})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    //  console.log('response_status:', response.ok)
    if (response.ok === true) {
      const result = await response.json()
      //   console.log('home_api_response_result', result)
      const videosList = result.videos.map(eachItem => ({
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
        homeVideosList: videosList,
        currentState: homePageActiveStates.success,
      })
    } else {
      this.setState({currentState: homePageActiveStates.failure})
    }
  }

  onClickFailureRetry = () => this.fetchVideos()

  displayNoVideosFound = () => (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <HomePageNoVideosContainer darkMode={darkMode}>
            <NoVideosImgElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeadingText title="true" darkMode={darkMode}>
              No Search results found
            </NoVideoHeadingText>
            <NoVideoHeadingText darkMode={darkMode} as="p">
              Try different key words or remove search filter
            </NoVideoHeadingText>
            <NoVideosRetryButton>Retry</NoVideosRetryButton>
          </HomePageNoVideosContainer>
        )
      }}
    </AppContext.Consumer>
  )

  displayHomePageSuccessView = () => {
    const {homeVideosList} = this.state
    const isVideosListEmpty = homeVideosList.length === 0
    return isVideosListEmpty ? (
      this.displayNoVideosFound()
    ) : (
      <HomeVideosUnorderedList>
        {homeVideosList.map(eachItem => (
          <HomePageVideoItem videoDetails={eachItem} key={eachItem.id} />
        ))}
      </HomeVideosUnorderedList>
    )
  }

  displayHomePageFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <HomePageNoVideosContainer darkMode={darkMode}>
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
              Opps! Something Went Wrong
            </NoVideoHeadingText>
            <NoVideoHeadingText darkMode={darkMode} as="p">
              We are having some trouble to complete your request.Please try
              again
            </NoVideoHeadingText>
            <NoVideosRetryButton onClick={this.onClickFailureRetry}>
              Retry
            </NoVideosRetryButton>
          </HomePageNoVideosContainer>
        )
      }}
    </AppContext.Consumer>
  )

  onClickCloseBanner = () => {
    this.setState({isBannerClosed: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displayHomePageLoadingView = () => <LoadingView />

  displayHomePage = () => {
    const {currentState} = this.state
    switch (currentState) {
      case homePageActiveStates.success:
        return this.displayHomePageSuccessView()
      case homePageActiveStates.failure:
        return this.displayHomePageFailureView()
      case homePageActiveStates.loading:
        return this.displayHomePageLoadingView()
      default:
        return null
    }
  }

  render() {
    const {isBannerClosed, isActiveTabUpdated} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode, updateActiveTabId} = value

          if (!isActiveTabUpdated) {
            this.setState({isActiveTabUpdated: true}, updateActiveTabId('HOME'))
          }

          return (
            <HomeRouteSectionView darkMode={darkMode}>
              <Header />
              <HomePageBackgroundContainer>
                <LeftSideBarDesktopViewContainer>
                  <LeftSideBar />
                </LeftSideBarDesktopViewContainer>
                <HomePageVideosContainer>
                  <HomePageTopBannerContainer isBannerClosed={isBannerClosed}>
                    <BannerLeftContainer>
                      <BannerImageElement src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerLeftContainer>
                    <BannerCloseButton onClick={this.onClickCloseBanner}>
                      <IoMdClose />
                    </BannerCloseButton>
                  </HomePageTopBannerContainer>
                  <HomePageVideosSection darkMode={darkMode}>
                    <SearchBarContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        darkMode={darkMode}
                      />
                      <SearchButton
                        onClick={this.fetchVideos}
                        darkMode={darkMode}
                      >
                        <HiSearch size={18} />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.displayHomePage()}
                  </HomePageVideosSection>
                </HomePageVideosContainer>
              </HomePageBackgroundContainer>
            </HomeRouteSectionView>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
