import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  SavedVideoListItem,
  SavedVideoThumbnailImgElement,
  SavedVideoItemInfoContainer,
  VideoInfoText,
  DotSpanElement,
  StyledLink,
  SavedVideoThumbnailContainer,
  SavedVideosBottomContainer,
  SavedVideoChannelProfileImg,
} from './StyledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const getTimeDurationFromPublished = () =>
    formatDistanceToNow(new Date(publishedAt))

  return (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <SavedVideoListItem>
              <SavedVideoThumbnailContainer>
                <SavedVideoThumbnailImgElement src={thumbnailUrl} />
              </SavedVideoThumbnailContainer>
              <SavedVideosBottomContainer>
                <SavedVideoChannelProfileImg
                  src={channel.profileImageUrl}
                  alt={title}
                />
                <SavedVideoItemInfoContainer>
                  <VideoInfoText title="true" darkMode={darkMode}>
                    {title}
                  </VideoInfoText>
                  <VideoInfoText darkMode={darkMode}>
                    {channel.name}
                  </VideoInfoText>
                  <VideoInfoText darkMode={darkMode}>
                    {viewCount}
                    <DotSpanElement>.</DotSpanElement>
                    {getTimeDurationFromPublished()}
                  </VideoInfoText>
                </SavedVideoItemInfoContainer>
              </SavedVideosBottomContainer>
            </SavedVideoListItem>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}
export default TrendingVideoItem
