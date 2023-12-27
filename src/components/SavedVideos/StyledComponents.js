import styled from 'styled-components'
import {RiMenuAddLine} from 'react-icons/ri'

export const SavedAndLeftBarContainer = styled.div`
  display: flex;
  min-height: 92vh;
`
export const RouteContentContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
  margin-top: 8vh;
  @media screen and (min-width: 769px) {
    margin-left: 15vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 80vw;
  }
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const SavedVideosBackgroundContainer = styled.div`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
`
export const SavedVideosTopSectionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 16vh;
  padding-left: 100px;
  margin-bottom: 0px;
  background-color: ${props => (props.darkMode ? '#231f20' : '#f4f4f4')};
  @media screen and (max-width: 767px) {
    height: 10vh;
    padding-left: 40px;
  }
`
export const SavedVideosMainHeadingText = styled.h1`
  font-size: 40px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${props => (props.darkMode ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const SavedIconContainer = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 90px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#d7dfe9')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
`
export const StyledSaveIcon = styled(RiMenuAddLine)`
  font-size: 40px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const SavedVideosUnOrderListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f8fafc')};
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  @media screen and (max-width: 567px) {
    padding: 0px;
  }
`
export const NoVideosContainer = styled.div`
  height: 92vh;
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 567px) {
    justify-content: center;
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

export const NoVideoHeadingText = styled.h1`
  color: ${props =>
    props.title
      ? `${props.darkMode ? '#f9f9f9' : '#313131'}`
      : `${props.darkMode ? '#cccccc' : '#616e7c'}`};
  font-size: ${props => (props.title ? '25px' : '16px')};
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '20px' : '12px')};
    text-align: center;
  }
`
