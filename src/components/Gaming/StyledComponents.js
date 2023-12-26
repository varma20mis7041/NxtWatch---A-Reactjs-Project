import styled from 'styled-components'
import {IoLogoGameControllerB} from 'react-icons/io'

export const RouteContentContainer = styled.div`
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

export const GamingRouteLeftSideAndVideosContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingVideosBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GamingVideosTopContainer = styled.div`
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
export const GamingIconContainer = styled.div`
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
export const StyledGamingIcon = styled(IoLogoGameControllerB)`
  font-size: 40px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const GamingHeadingText = styled.h1`
  font-size: 40px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${props => (props.darkMode ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const GamingVideosUnOrderedListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0px 40px 60px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f8fafc')};
  margin: 0px;
  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    padding: 30px 0px 30px 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding: 20px 0px 20px 30px;
  }
  @media screen and (max-width: 767px) {
    padding: 22px 0px 22px 22px;
  }
`
