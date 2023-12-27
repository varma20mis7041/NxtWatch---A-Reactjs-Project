import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import TabItem from '../TabItem'
import AppContext from '../../context/AppContext'

import {
  LeftBarContainer,
  LeftBarTopSectionBgContainer,
  LeftBarBottomSection,
  LeftBarHeadingText,
  SocialMediaLinksContainer,
  SocialMediaImgElement,
} from './StyledComponents'

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

class LeftSideBar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <LeftBarContainer darkMode={darkMode}>
              <LeftBarTopSectionBgContainer>
                {TabsList.map(eachTab => (
                  <TabItem tabDetails={eachTab} key={eachTab.tabId} />
                ))}
              </LeftBarTopSectionBgContainer>
              <LeftBarBottomSection>
                <LeftBarHeadingText darkMode={darkMode} as="p">
                  CONTACT US
                </LeftBarHeadingText>
                <SocialMediaLinksContainer>
                  <SocialMediaImgElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImgElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImgElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaLinksContainer>
                <LeftBarHeadingText description darkMode={darkMode} as="p">
                  Enjoy! Now to see your channels and recommendations!
                </LeftBarHeadingText>
              </LeftBarBottomSection>
            </LeftBarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(LeftSideBar)
