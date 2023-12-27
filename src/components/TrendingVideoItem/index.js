import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  TrendingVideoListItem,
  TrendingVideoThumbnailImgElement,
  TrendingVideoItemInfoContainer,
  VideoInfoText,
  DotSpanElement,
  StyledLink,
  TrendingVideoDetailsContainer,
  TrendingVideoThumbnailContainer,
  TrendingVideoChannelProfileImg,
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
            <TrendingVideoListItem>
              <TrendingVideoThumbnailContainer>
                <TrendingVideoThumbnailImgElement
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
              </TrendingVideoThumbnailContainer>
              <TrendingVideoDetailsContainer>
                <TrendingVideoChannelProfileImg
                  src={channel.profileImageUrl}
                  alt={title}
                />
                <TrendingVideoItemInfoContainer>
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
                </TrendingVideoItemInfoContainer>
              </TrendingVideoDetailsContainer>
            </TrendingVideoListItem>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}
export default TrendingVideoItem
