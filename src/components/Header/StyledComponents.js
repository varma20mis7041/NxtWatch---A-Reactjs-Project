import styled from 'styled-components'

export const HeaderBackgroundContainer = styled.nav`
  position: fixed;
  top: 0;
  padding: 0px 50px 0px 50px;
  min-height: 8vh;
  max-height: 8vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  @media screen and (min-width: 768px) and (max-width: 1100px) {
    padding: 0px 25px 0px 25px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 10px 0px 10px;
  }
`

export const HeaderSectionCustomImgElement = styled.img`
  height: 35px;
  width: ${props => (props.profile ? '35px' : '140px')};
  @media screen and (max-width: 768px) {
    width: ${props => (props.profile ? '35px' : '100px')};
    height: 30px;
  }
`
export const HeaderRightSideContainer = styled.ul`
  padding: 0px;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1101px) and (max-width: 1600px) {
    width: 15vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1100px) {
    width: 23vw;
  }
  @media screen and (min-width: 1100px) and (max-width: 1600px) {
    width: 15vw;
  }
  @media screen and (max-width: 768px) {
    width: 22vw;
  }
`
export const NavItem = styled.li`
  list-style: none;
`
export const HeaderCustomButton = styled.button`
  border-width: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const ProfileButton = styled(HeaderCustomButton)`
  cursor: auto;
  margin-left: 10px;
  display: ${props => (props.large ? 'block' : 'none')};
  @media screen and (max-width: 768px) {
    display: ${props => (props.small ? 'block' : 'none')};
    color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  }
`
export const MenuTabsButton = styled(ProfileButton)`
  display: block;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 5px;
  margin-left: 8px;
`

export const LogoutButton = styled.button`
  @media screen and (min-width:768px){
  display:${props => (props.large ? 'block' : 'none')};
  height: 30px;
  width: 80px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  border: 2px solid ${props => (props.darkMode ? '#f9f9f9' : '#4f46e5')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#4f46e5')};
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  display
  }
  @media screen and (max-width:767px){
      display:${props => (props.small ? 'block' : 'none')};
      color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
      border:0;
      padding:0;
      background-color:transparent;
  }
`
export const TabsMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const PopupContainer = styled.div`
  // padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   min-height: 100vh;
  width: 80vw;
  //   min-width: 90vw;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  border-radius: 10px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
`
export const LogoutPopupContainer = styled.div`
  height: 200px;
  width: 400px;
  border-radius: 15px;
  background-color: ${props => (props.darkMode ? '#181818' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const LogoutPopupText = styled.h1`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const CustomLogoutPopupButton = styled.button`
  height: 40px;
  width: 80px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    height: 30px;
  }
`
export const CustomLogoutCancelPopupButton = styled(CustomLogoutPopupButton)`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  outline: none;
  border-color: ${props => (props.darkMode ? '#d7dfe9' : '#000000')};
`
