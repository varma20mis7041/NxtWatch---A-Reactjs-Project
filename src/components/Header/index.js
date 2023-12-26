import {withRouter} from 'react-router-dom'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import AppContext from '../../context/AppContext'
import {LeftSideBarMobileViewContainer} from '../TabsDisplayStyledComponents'
import LeftSideBar from '../LeftSideBar'

import {
  HeaderBackgroundContainer,
  HeaderSectionCustomImgElement,
  HeaderRightSideContainer,
  HeaderCustomButton,
  LogoutButton,
  ProfileButton,
  TabsMenuContainer,
  MenuTabsButton,
  PopupContainer,
  LogoutPopupContainer,
  LogoutPopupText,
  ButtonsContainer,
  CustomLogoutPopupButton,
  CustomLogoutCancelPopupButton,
} from './StyledComponents'
import {StyledLink} from '../TabItem/StyledComponents'

const Header = props => {
  console.log('header')
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {darkMode, toggleTheme} = value
        console.log('darkTheme:', darkMode)
        return (
          <HeaderBackgroundContainer darkMode={darkMode}>
            <StyledLink to="/">
              <HeaderSectionCustomImgElement
                src={`${
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }`}
              />
            </StyledLink>
            <HeaderRightSideContainer>
              <HeaderCustomButton onClick={toggleTheme}>
                {darkMode ? (
                  <FiSun size={20} color="#f9f9f9" />
                ) : (
                  <FaMoon size={20} />
                )}
              </HeaderCustomButton>
              <ProfileButton large>
                <HeaderSectionCustomImgElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  profile="true"
                />
              </ProfileButton>

              <Popup
                modal
                trigger={
                  <TabsMenuContainer small darkMode={darkMode}>
                    <GiHamburgerMenu
                      size={20}
                      color={darkMode ? '#ffffff' : '#000000'}
                    />
                  </TabsMenuContainer>
                }
              >
                {close => (
                  <PopupContainer darkMode={darkMode}>
                    <MenuTabsButton onClick={() => close()} type="button" small>
                      <MdClose
                        size={25}
                        color={darkMode ? '#ffffff' : '#000000'}
                      />
                    </MenuTabsButton>
                    <LeftSideBarMobileViewContainer>
                      <LeftSideBar />
                    </LeftSideBarMobileViewContainer>
                  </PopupContainer>
                )}
              </Popup>

              <Popup
                trigger={
                  <LogoutButton
                    type="button"
                    darkMode={darkMode}
                    large
                    onClick={logout}
                  >
                    Logout
                  </LogoutButton>
                }
                modal
              >
                {close => (
                  <LogoutPopupContainer darkMode={darkMode}>
                    <LogoutPopupText darkMode={darkMode}>
                      Are you sure you want to logout?
                    </LogoutPopupText>
                    <ButtonsContainer>
                      <CustomLogoutCancelPopupButton
                        onClick={() => close()}
                        cancelButton="true"
                        darkMode={darkMode}
                      >
                        Cancel
                      </CustomLogoutCancelPopupButton>
                      <CustomLogoutPopupButton onClick={logout} logout="true">
                        Logout
                      </CustomLogoutPopupButton>
                    </ButtonsContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>

              <LogoutButton
                type="button"
                darkMode={darkMode}
                small
                onClick={logout}
              >
                <FiLogOut size={20} />
              </LogoutButton>
            </HeaderRightSideContainer>
          </HeaderBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)
