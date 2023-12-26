import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MenuTabsButton} from '../Header/StyledComponents'
import AppContext from '../../context/AppContext'
import LeftSideBar from '../LeftSideBar'
import {LeftSideBarMobileViewContainer} from '../TabsDisplayStyledComponents'
import {
  PopupContainer,
  CustomCloseButton,
  StyledPopup,
} from './StyledComponents'

const MenuPopup = () => (
  <AppContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <div className="popup-container">
          <StyledPopup
            trigger={
              <MenuTabsButton small darkMode={darkMode} onClick={<MenuPopup />}>
                <GiHamburgerMenu size={20} />
              </MenuTabsButton>
            }
            modal
            position="center"
          >
            {close => (
              <>
                <PopupContainer>
                  <LeftSideBarMobileViewContainer>
                    <LeftSideBar />
                  </LeftSideBarMobileViewContainer>
                  <CustomCloseButton type="button" onClick={() => close()}>
                    Close
                  </CustomCloseButton>
                </PopupContainer>
              </>
            )}
          </StyledPopup>
        </div>
      )
    }}
  </AppContext.Consumer>
)
export default MenuPopup
