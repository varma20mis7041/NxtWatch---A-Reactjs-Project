import {IoLogoGameControllerB} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {RiMenuAddLine} from 'react-icons/ri'

import {ReactIcon, CustomTabItem, StyledLink} from './StyledComponents'

import AppContent from '../../context/AppContext'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText, tabId, routeText} = tabDetails

  const iconSize = 24

  const getIcon = () => {
    switch (tabId) {
      case 'HOME':
        return <AiFillHome size={iconSize} />
      case 'TRENDING':
        return <HiFire size={iconSize} />
      case 'GAMING':
        return <IoLogoGameControllerB size={iconSize} />
      default:
        return <RiMenuAddLine size={iconSize} />
    }
  }

  return (
    <AppContent.Consumer>
      {value => {
        const {darkMode, activeTabId} = value
        const isActive = tabId === activeTabId
        return (
          <StyledLink to={routeText}>
            <CustomTabItem isActive={isActive} darkMode={darkMode}>
              <ReactIcon isActive={isActive} darkMode={darkMode}>
                {getIcon()}
              </ReactIcon>
              {displayText}
            </CustomTabItem>
          </StyledLink>
        )
      }}
    </AppContent.Consumer>
  )
}

export default TabItem
