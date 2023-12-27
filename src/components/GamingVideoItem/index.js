import {
  GamingVideoListItem,
  ThumbnailImgElement,
  VideoInfoText,
  StyledLink,
} from './StyledComponents'
import AppContext from '../../context/AppContext'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, title, viewCount, id} = videoDetails
  return (
    <AppContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <GamingVideoListItem darkMode={darkMode}>
              <ThumbnailImgElement src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoText title darkMode={darkMode} as="p">
                {title}
              </VideoInfoText>
              <VideoInfoText darkMode={darkMode} as="p">
                {`${viewCount} Watching Worldwide`}
              </VideoInfoText>
            </GamingVideoListItem>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}
export default GamingVideoItem
