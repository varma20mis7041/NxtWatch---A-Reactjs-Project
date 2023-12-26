import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 19vw;
  height: 36vh;
  margin-bottom: 24px;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (min-width: 1200px) and (max-width: 1700px) {
    width: 25vw;
    margin-right: 18px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 32vw;
    margin-right: 10px;
  }
  @media screen and (min-width: 767px) and (max-width: 800px) {
    width: 28vw;
    margin-right: 10px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 47%;
    margin-right: 10px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 45px;
  }
`

export const CustomListItem = styled.li`
  min-height: 100%;
  min-width: 100%;
`
export const ThumbnailImgElement = styled.img`
  height: 60%;
  width: 100%;
  border-radius: 8px;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 38vw;
    border-radius: 6px;
  }
  @media (max-width: 567px) {
    border-radius: 0px;
  }
`
export const VideoInfoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  @media (max-width: 567px) {
    padding: 10px 15px 5px 15px;
  }
`
export const ChannelProfileImgElement = styled.img`
  height: 45px;
  width: 45px;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 35px;
  }
`
export const VideoInfoRightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const VideoInfoText = styled.h1`
  font-size: ${props => (props.title ? '18px' : '16px')};
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 4px;
  margin-left: 3px;
  font-weight: ${props => (props.title ? '450' : '400')};
  color: ${props =>
    props.title
      ? ` ${props.darkMode ? '#ebebeb' : '#313131'}`
      : ` ${props.darkMode ? '#cccccc' : '#424242'}`};
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: ${props => (props.title ? '16px' : '14px')};
  }
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '14px' : '12px')};
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
