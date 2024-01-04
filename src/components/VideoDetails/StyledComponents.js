import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoDetailsRouteBgContainer = styled.div`
  display: flex;
  min-height: 100vh;
`
export const RouteContentContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
  margin-top: 8vh;
  @media screen and (min-width: 769px) {
    margin-left: 15vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-left: 20vw;
    width: 80vw;
  }
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const VideoContainer = styled.div`
  padding: 30px 30px 0px 30px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
export const VideoDetailsBottomContainer = styled.div`
  padding: 30px;
  @media screen and (min-width: 768px) and (max-width: 1600px) {
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 17px;
  }
`
export const StyledReactPlayer = styled(ReactPlayer)`
  height: 70vh !important;
  width: 100% !important;
  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    height: 50vh !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1100px) {
    height: 40vh !important;
  }

  @media screen and (max-width: 767px) {
    height: 35vh !important;
  }
`

export const VideoDetailsCustomText = styled.p`
  font-size: ${props => (props.title ? '18px' : '14px')};
  font-family: 'Roboto';
  font-weight: ${props => (props.title ? '450' : '400')};
  color: ${props =>
    props.title
      ? ` ${props.darkMode ? '#ebebeb' : '#313131'}`
      : ` ${props.darkMode ? '#cccccc' : '#616e7c'}`};
  align-self: flex-start;
  margin-top: ${props => props.videoDescription && '20px'};
  @media screen and (max-width: 767px) {
    margin: ${props => props.title && '10px 0px 10px 0px;'};
    font-size: ${props => (props.title ? '16px' : '13px')};
  }
`
export const VideoDetailsCustomLargeText = styled(VideoDetailsCustomText)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoDetailsCustomSmallText = styled(VideoDetailsCustomText)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`
export const VideoDetailsMiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsAndAgoContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DotSpanElement = styled.span`
  height: 14px;
  width: 20px;
  font-size: 25px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : '#313131')};
`
export const LikeDislikeSaveButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 18%;
  align-items: center;

  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    width: 15vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1100px) {
    width: 23vw;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
    justify-content: flex-start;
  }
`
export const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomReactionButton = styled.button`
  margin-left: 5px;
  padding: 0px;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-left: 7px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    margin-right: 15px;
  }
`

export const StyledHr = styled.hr`
  height: 2px;
  color: blue;
`
export const VideoDetailsChannelDetailsAndDescriptionContainer = styled.div`
  display: flex;
`
export const ChannelDetailsAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`
export const ChannelDetailsCustomText = styled(VideoDetailsCustomText)`
  margin: 2px;
  margin-top: 3px;
`
export const NoVideosContainer = styled.div`
  height: 92vh;
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100vw;
  }
`
export const NoVideosImgElement = styled.img`
  height: 250px;
  width: ${props => (props.failure ? '300px' : '350px')};
  margin-bottom: 15px;
  margin-top: 40px;
  @media (max-width:767px){
    height:150px;
    width: ${props => (props.failure ? '200px' : '250px')};s
  }
`
export const NoVideosRetryButton = styled.button`
  height: 45px;
  width: 140px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  border-width: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  cursor: pointer;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    height: 35px;
    width: 100px;
    font-size: 13px;
  }
`
export const NoVideoHeadingText = styled.h1`
  color: ${props =>
    props.title
      ? `${props.darkMode ? '#f9f9f9' : '#313131'}`
      : `${props.darkMode ? '#cccccc' : '#616e7c'}`};
  font-size: ${props => (props.title ? '25px' : '18px')};
  font-weight: 500;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '20px' : '16px')};
    text-align: center;
  }
`
