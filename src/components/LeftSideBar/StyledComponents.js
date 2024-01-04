import styled from 'styled-components'

export const LeftBarContainer = styled.div`
  height: 92vh;
  min-width: 15vw;
  max-width: 15vw;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  top: 8vh;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    min-width: 20vw;
    max-width: 20vw;
    padding-top: 15px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LeftBarTopSectionBgContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const LeftBarBottomSection = styled.div`
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 10px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LeftBarHeadingText = styled.h1`
  font-size: ${props => (props.description ? '16px' : '20px')};
  font-family: 'Roboto';
  font-weight: ${props => (props.description ? '500' : '600')};
  color: #212121;
  color: ${props => (props.darkMode ? '#f4f4f4' : '#212121')};
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: ${props => (props.description ? '15px' : '17px')};
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 600;
  }
`
export const SocialMediaLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`
export const SocialMediaImgElement = styled.img`
  height: 35px;
  width: 35px;
`
