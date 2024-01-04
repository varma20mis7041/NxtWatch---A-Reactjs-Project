import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import LoadingView from '../LoadingView'
import LeftSideBar from '../LeftSideBar'
import Header from '../Header'
import AppContext from '../../context/AppContext'

import {
  VideoDetailsRouteBgContainer,
  VideoDetailsContainer,
  VideoDetailsCustomText,
  VideoDetailsMiddleContainer,
  ViewsAndAgoContainer,
  DotSpanElement,
  LikeDislikeSaveButtonsContainer,
  CustomReactionButton,
  StyledHr,
  VideoDetailsChannelDetailsAndDescriptionContainer,
  ChannelDetailsAndDescriptionContainer,
  ChannelDetailsCustomText,
  StyledReactPlayer,
  VideoContainer,
  VideoDetailsBottomContainer,
  VideoDetailsCustomLargeText,
  VideoDetailsCustomSmallText,
  NoVideosContainer,
  NoVideosImgElement,
  NoVideoHeadingText,
  NoVideosRetryButton,
  RouteContentContainer,
  ReactionContainer,
} from './StyledComponents'

import {ChannelProfileImgElement} from '../HomePageVideoItem/StyledComponents'

const videoDetailsActiveStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    currentState: videoDetailsActiveStates.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({currentState: videoDetailsActiveStates.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    //  console.log('id:', id)
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const result = await response.json()
      // console.log('video_details_results:', result.video_details)
      const videoDetails = result.video_details
      const updatedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
        reaction: 'NORMAL',
        isSaved: false,
      }
      //    console.log('updated_video_details :', updatedVideoDetails)
      this.setState({
        videoDetails: updatedVideoDetails,
        currentState: videoDetailsActiveStates.success,
      })
    } else {
      this.setState({currentState: videoDetailsActiveStates.failure})
    }
  }

  getTimeDurationFromPublished = date => formatDistanceToNow(new Date(date))

  onClickFailureRetry = () => this.fetchVideoDetails()

  displayLoadingView = () => <LoadingView />

  displayFailureView = () => (
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
              We are having some trouble to complete your request. Please try
              again.
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

  displaySuccessView = () => {
    const {videoDetails} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails

    return (
      <AppContext.Consumer>
        {value => {
          const {
            savedList,
            reactedList,
            updateReactedVideos,
            updateSavedVideos,
            darkMode,
          } = value
          const updateLikeReaction = () => {
            updateReactedVideos({
              ...videoDetails,
              reaction: 'LIKED',
            })
          }
          const updateDislikeReaction = () => {
            updateReactedVideos({
              ...videoDetails,
              reaction: 'DISLIKED',
            })
          }

          const onClickSave = () => {
            updateSavedVideos({...videoDetails, isSaved: true})
          }
          const videoReactionDetails = reactedList.filter(
            eachItem => eachItem.id === id,
          )
          let isActiveLike = false
          let isActiveDislike = false
          if (videoReactionDetails.length > 0) {
            // console.log('final', videoReactionDetails[0].reaction)
            if (videoReactionDetails[0].reaction === 'LIKED') {
              isActiveLike = true
              isActiveDislike = false
            } else {
              isActiveDislike = true
              isActiveLike = false
            }
          }

          const videoSavedDetails = savedList.filter(
            eachItem => eachItem.id === id,
          )
          let isSaved = false
          if (videoSavedDetails.length > 0) {
            isSaved = videoSavedDetails[0].isSaved
          }

          console.log('video_SAVED_details:', videoSavedDetails)
          const saveButtonTextContent = isSaved ? 'Saved' : 'Save'

          return (
            <VideoDetailsContainer>
              <VideoContainer>
                <StyledReactPlayer url={videoUrl} controls />
              </VideoContainer>
              <VideoDetailsBottomContainer>
                <VideoDetailsCustomText title="true" darkMode={darkMode} as="p">
                  {title}
                </VideoDetailsCustomText>
                <VideoDetailsMiddleContainer>
                  <ViewsAndAgoContainer>
                    <VideoDetailsCustomText darkMode={darkMode} as="p">
                      {`${viewCount} Views`}
                    </VideoDetailsCustomText>
                    <DotSpanElement>.</DotSpanElement>
                    <VideoDetailsCustomText darkMode={darkMode} as="p">
                      {this.getTimeDurationFromPublished(publishedAt)}
                    </VideoDetailsCustomText>
                  </ViewsAndAgoContainer>
                  <LikeDislikeSaveButtonsContainer>
                    <ReactionContainer>
                      <BiLike
                        size={18}
                        color={isActiveLike ? '#2563eb' : '#64748b'}
                      />
                      <CustomReactionButton
                        type="button"
                        onClick={updateLikeReaction}
                        isActive={isActiveLike}
                      >
                        Like
                      </CustomReactionButton>
                    </ReactionContainer>
                    <ReactionContainer>
                      <BiDislike
                        size={18}
                        color={isActiveDislike ? '#2563eb' : '#64748b'}
                      />
                      <CustomReactionButton
                        type="button"
                        onClick={updateDislikeReaction}
                        isActive={isActiveDislike}
                      >
                        Dislike
                      </CustomReactionButton>
                    </ReactionContainer>
                    <ReactionContainer>
                      <RiMenuAddLine
                        size={18}
                        color={isSaved ? '#2563eb' : '#64748b'}
                      />
                      <CustomReactionButton
                        type="button"
                        onClick={onClickSave}
                        isActive={isSaved}
                      >
                        {saveButtonTextContent}
                      </CustomReactionButton>
                    </ReactionContainer>
                  </LikeDislikeSaveButtonsContainer>
                </VideoDetailsMiddleContainer>
                <StyledHr />
                <VideoDetailsChannelDetailsAndDescriptionContainer>
                  <ChannelProfileImgElement
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelDetailsAndDescriptionContainer>
                    <ChannelDetailsCustomText
                      title="true"
                      darkMode={darkMode}
                      as="p"
                    >
                      {channel.name}
                    </ChannelDetailsCustomText>
                    <ChannelDetailsCustomText darkMode={darkMode} as="p">
                      {`${channel.subscriberCount} subscribers`}
                    </ChannelDetailsCustomText>
                    <VideoDetailsCustomLargeText
                      videoDescription="true"
                      darkMode={darkMode}
                      as="p"
                    >
                      {description}
                    </VideoDetailsCustomLargeText>
                  </ChannelDetailsAndDescriptionContainer>
                </VideoDetailsChannelDetailsAndDescriptionContainer>
                <VideoDetailsCustomSmallText
                  videoDescription="true"
                  darkMode={darkMode}
                  small="true"
                  as="p"
                >
                  {description}
                </VideoDetailsCustomSmallText>
              </VideoDetailsBottomContainer>
            </VideoDetailsContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  displayVideoDetailsView = () => {
    const {currentState} = this.state
    switch (currentState) {
      case videoDetailsActiveStates.loading:
        return this.displayLoadingView()
      case videoDetailsActiveStates.success:
        return this.displaySuccessView()
      case videoDetailsActiveStates.failure:
        return this.displayFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <VideoDetailsRouteBgContainer>
                <LeftSideBar />
                <RouteContentContainer
                  data-testid="videoItemDetails"
                  darkMode={darkMode}
                >
                  {this.displayVideoDetailsView()}
                </RouteContentContainer>
              </VideoDetailsRouteBgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default VideoDetails
