import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 16vw;
  margin-right: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 1600px) and (max-width: 1800px) {
    width: 20vw;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    width: 15vw;
    margin-right: 40px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    width: 32vw;
    margin-right: 35px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    height: 31vh;
    width: 28vw;
    margin-right: 15px;
  }
  @media screen and (max-width: 567px) {
    width: 41vw;
  }
`

export const GamingVideoListItem = styled.li`
    height:100%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ThumbnailImgElement = styled.img`
  height: 86%;
  width: 100%;
  border-radius: 10px;
`

export const VideoInfoText = styled.h1`
  font-size: ${props => (props.title ? '18px' : '16px')};
  font-family: 'Roboto';
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 3px;
  font-weight: ${props => (props.title ? '450' : '400')};
  color: ${props =>
    props.title
      ? ` ${props.darkMode ? '#ebebeb' : '#313131'}`
      : ` ${props.darkMode ? '#cccccc' : '#424242'}`};
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '16px' : '13px')};
  }
  @media screen and (max-width: 567px) {
    font-size: ${props => (props.title ? '15px' : '12px')};
  }
`
