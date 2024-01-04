import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  height: 30vh;
  margin-bottom: 60px;
  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    height: 35vh;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 25vh;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    height: 20vh;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 567px) {
    height: 40vh;
  }
`

export const TrendingVideoListItem = styled.li`
  display: flex;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 567px) {
    display: flex;
    flex-direction: column;
  }
`
export const TrendingVideoThumbnailContainer = styled.div`
  min-width: 500px;
  max-width: 500px;
  margin-right: 15px;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    min-width: 400px;
    max-width: 400px;
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    min-width: 300px;
    max-width: 300px;
    margin-right: 20px;
  }
  @media (max-width: 567px) {
    min-width: 100vw;
    margin-right: 0px;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  @media (max-width: 567px) {
    display: flex;
    padding: 18px;
  }
`
export const TrendingVideoThumbnailImgElement = styled.img`
  height: 100%;
  max-width: 100%;
`
export const TrendingVideoItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingVideoChannelProfileImg = styled.img`
  display: none;
  @media (max-width: 767px) {
    display: block;
    height: 25px;
    width: 25px;
    margin-right: 10px;
  }
`
export const VideoInfoText = styled.p`
  font-size: ${props => (props.title ? '25px' : '16px')};
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 8px;
  margin-left: 3px;
  font-weight: ${props => (props.title ? '450' : '400')};
  color: ${props =>
    props.title
      ? ` ${props.darkMode ? '#ebebeb' : '#313131'}`
      : ` ${props.darkMode ? '#cccccc' : '#424242'}`};
  display: flex;
  align-items: center;
  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    font-size: ${props => (props.title ? '22px' : '16px')};
    margin-bottom: 7px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    font-size: ${props => (props.title ? '18px' : '14px')};
    margin-bottom: 6px;
  }
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '14px' : '11px')};
    margin-bottom: 4px;
  }
`
export const DotSpanElement = styled.span`
  height: 14px;
  width: 14px;
  font-size: 20px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 7px;
`
