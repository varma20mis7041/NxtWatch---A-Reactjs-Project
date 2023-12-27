import AppContext from '../../context/AppContext'
import {NotFoundContainer, PopupImg, NotFoundText} from './StyledComponents'

const NotFound = () => (
  <AppContext>
    {value => {
      const {darkMode} = value
      return (
        <NotFoundContainer>
          <PopupImg
            alt="not found"
            src={`${
              darkMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }`}
          />
          <NotFoundText title="true">Page Not Found</NotFoundText>
          <NotFoundText as="p">
            we are sorry, the page you requested could not be found.
          </NotFoundText>
        </NotFoundContainer>
      )
    }}
  </AppContext>
)
export default NotFound
