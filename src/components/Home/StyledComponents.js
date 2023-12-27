import styled from 'styled-components'

export const HomeRouteSectionView = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const HomePageBackgroundContainer = styled.div`
  margin-top: 0px;
  display: flex;
  scroll-behavior: smooth;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const HomePageVideosContainer = styled.div`
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
    margin-left: 0px;
    width: 100vw;
  }
`

export const HomePageTopBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  display: ${props => (props.isBannerClosed ? 'none' : 'auto')};
  height: 30vh;
  @media screen and (max-width: 767px) {
    padding: 17px;
    height: 25vh;
    width: 100vw;
  }
`

export const HomePageVideosSection = styled.div`
  padding: 30px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f8fafc')};
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
  @media screen and (max-width: 567px) {
    padding: 0px;
  }
`
export const BannerLeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`
export const BannerImageElement = styled.img`
  height: 45px;
  width: 200px;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 150px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 567px) {
    height: 30px;
    width: 100px;
  }
`
export const BannerText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  border-width: 1px;
  font-size: 16px;
  font-weight: 600;
  height: 45px;
  width: 150px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    height: 35px;
    width: 100px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 567px) {
    font-size: 9px;
    height: 40px;
    width: 80px;
  }
`
export const BannerCloseButton = styled.button`
  height: 25px;
  width: 25px;
  padding: 0;
  background-color: transparent;
  border-width: 0;
  outline: none;
  cursor: pointer;
`
export const SearchBarContainer = styled.div`
  display: flex;
  width: 35vw;
  @media screen and (max-width: 767px) {
    width: 60vw;
  }
  @media screen and (max-width: 567px) {
    margin-left: 20px;
    margin-top: 15px;
    width: 89vw;
  }
`
export const SearchInput = styled.input`
  outline: none;
  height: 40px;
  width: 85%;
  font-size: 17px;
  padding: 10px;
  border: 1px solid ${props => (props.darkMode ? '#424242' : '#94a3b8')};
  color: ${props => (props.darkMode ? '#94a3b8' : '#424242')};
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 767px) {
    height: 35px;
  }
`
export const SearchButton = styled.button`
  width: 15%;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 1px solid ${props => (props.darkMode ? '#424242' : '#94a3b8')};
  border-left-width: 0px;
  background-color: ${props => (props.darkMode ? '#212121' : '#f8fafc')};
  color: #424242;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 20%;
    border-left-width: 0px;
  }
`
export const HomeVideosUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100%;
`

export const HomePageNoVideosContainer = styled.div`
  height: 51vh;
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 56vh;
  }
`
export const NoVideosImgElement = styled.img`
  height: 250px;
  width: ${props => (props.failure ? '300px' : '350px')};
  margin-bottom: 15px;
  margin-top: 25px;
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
