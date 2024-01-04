import {withRouter} from 'react-router-dom'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import AppContext from '../../context/AppContext'
import {LeftBarTopSectionBgContainer} from '../LeftSideBar/StyledComponents'
import './index.css'

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
  NavItem,
} from './StyledComponents'
import {StyledLink} from '../TabItem/StyledComponents'
import TabItem from '../TabItem'

const Header = props => {
  console.log('header')
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const TabsList = [
    {
      tabId: 'HOME',
      displayText: 'Home',
      routeText: '/',
    },
    {
      tabId: 'TRENDING',
      displayText: 'Trending',
      routeText: '/trending',
    },
    {
      tabId: 'GAMING',
      displayText: 'Gaming',
      routeText: '/gaming',
    },
    {
      tabId: 'SAVED VIDEOS',
      displayText: 'Saved videos',
      routeText: '/saved-videos',
    },
  ]

  return (
    <AppContext.Consumer>
      {value => {
        const {darkMode, toggleTheme} = value
        console.log('darkTheme:', darkMode)
        return (
          <HeaderBackgroundContainer darkMode={darkMode}>
            <StyledLink to="/">
              <HeaderSectionCustomImgElement
                alt="website logo"
                src={`${
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }`}
              />
            </StyledLink>
            <HeaderRightSideContainer>
              <NavItem>
                <HeaderCustomButton
                  onClick={toggleTheme}
                  data-testid="theme"
                  type="button"
                >
                  {darkMode ? (
                    <FiSun size={20} color="#f9f9f9" />
                  ) : (
                    <FaMoon size={20} />
                  )}
                </HeaderCustomButton>
              </NavItem>
              <NavItem>
                <ProfileButton large>
                  <HeaderSectionCustomImgElement
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    profile="true"
                  />
                </ProfileButton>
              </NavItem>
              <NavItem>
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
                  className="pop_menu_content"
                >
                  {close => (
                    <PopupContainer darkMode={darkMode}>
                      <MenuTabsButton
                        onClick={() => close()}
                        type="button"
                        small="true"
                      >
                        <MdClose
                          size={25}
                          color={darkMode ? '#ffffff' : '#000000'}
                        />
                      </MenuTabsButton>
                      <LeftBarTopSectionBgContainer>
                        {TabsList.map(eachTab => (
                          <TabItem tabDetails={eachTab} key={eachTab.tabId} />
                        ))}
                      </LeftBarTopSectionBgContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </NavItem>

              <NavItem>
                <Popup
                  trigger={
                    <LogoutButton
                      type="button"
                      darkMode={darkMode}
                      large="true"
                    >
                      Logout
                    </LogoutButton>
                  }
                  modal
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContainer darkMode={darkMode}>
                      <LogoutPopupText darkMode={darkMode} as="p">
                        Are you sure, you want to logout
                      </LogoutPopupText>
                      <ButtonsContainer>
                        <CustomLogoutCancelPopupButton
                          onClick={() => close()}
                          cancelButton="true"
                          darkMode={darkMode}
                          type="button"
                        >
                          Cancel
                        </CustomLogoutCancelPopupButton>
                        <CustomLogoutPopupButton
                          onClick={logout}
                          logout="true"
                          type="button"
                        >
                          Confirm
                        </CustomLogoutPopupButton>
                      </ButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </NavItem>
              <NavItem>
                <Popup
                  trigger={
                    <LogoutButton
                      type="button"
                      darkMode={darkMode}
                      small="true"
                    >
                      <FiLogOut size={20} />
                    </LogoutButton>
                  }
                  modal
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContainer darkMode={darkMode}>
                      <LogoutPopupText darkMode={darkMode} as="p">
                        Are you sure, you want to logout
                      </LogoutPopupText>
                      <ButtonsContainer>
                        <CustomLogoutCancelPopupButton
                          onClick={() => close()}
                          cancelButton="true"
                          darkMode={darkMode}
                        >
                          Cancel
                        </CustomLogoutCancelPopupButton>
                        <CustomLogoutPopupButton
                          onClick={logout}
                          logout="true"
                          type="button"
                        >
                          Confirm
                        </CustomLogoutPopupButton>
                      </ButtonsContainer>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </NavItem>
            </HeaderRightSideContainer>
          </HeaderBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)
