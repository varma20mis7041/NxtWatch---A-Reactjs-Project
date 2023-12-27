import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'
// console.log(formatDistanceToNow(new Date(2021, 8, 20)))

import {
  CustomListItem,
  ThumbnailImgElement,
  VideoInfoContainer,
  ChannelProfileImgElement,
  VideoInfoRightSectionContainer,
  VideoInfoText,
  DotSpanElement,
  StyledLink,
} from './StyledComponents'

const HomePageVideoItem = props => {
  const {videoDetails} = props
  // console.log('Video item details : ', videoDetails)
  const {
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = videoDetails

  // console.log('duration:', formatDistanceToNow(new Date(publishedAt)))

  const getTimeDurationFromPublished = () =>
    formatDistanceToNow(new Date(publishedAt))
  return (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <CustomListItem>
              <ThumbnailImgElement src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoContainer>
                <ChannelProfileImgElement
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoInfoRightSectionContainer>
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
                </VideoInfoRightSectionContainer>
              </VideoInfoContainer>
            </CustomListItem>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}
export default HomePageVideoItem
