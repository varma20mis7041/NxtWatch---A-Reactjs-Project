import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {MdClose} from 'react-icons/md'
import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import {
  LoginRouteBackgroundContainer,
  LoginFormCardContainer,
  LoginPageLogoImgElement,
  LabelElement,
  LabelInputElement,
  LabelContainer,
  CustomLoginButton,
  CheckBoxContainer,
  ShowPasswordLabelElement,
  ErrorMessage,
  NoteContainer,
  NoteText,
  NoteCustomButton,
  CloseButton,
} from './StyledComponents'

import AppContext from '../../context/AppContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errMsg => {
    this.setState({errorMsg: errMsg, showErrorMsg: true})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    //   console.log('response from login api:', response.ok)
    const result = await response.json()
    if (response.ok === true) {
      this.loginSuccess(result.jwt_token)
    } else {
      this.loginFailure(result.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isShowPassword,
      errorMsg,
      showErrorMsg,
    } = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value

          const token = Cookies.get('jwt_token')
          if (token !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginRouteBackgroundContainer darkMode={darkMode}>
              <LoginFormCardContainer
                darkMode={darkMode}
                onSubmit={this.onSubmitLoginForm}
              >
                <LoginPageLogoImgElement
                  src={`${
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }`}
                  alt="website logo"
                />
                <LabelContainer>
                  <LabelElement darkMode={darkMode} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <LabelInputElement
                    id="username"
                    type="text"
                    placeholder="Username"
                    darkMode={darkMode}
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                </LabelContainer>
                <LabelContainer>
                  <LabelElement darkMode={darkMode} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <LabelInputElement
                    id="password"
                    type={`${isShowPassword ? 'text' : 'password'}`}
                    placeholder="Password"
                    darkMode={darkMode}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </LabelContainer>
                <CheckBoxContainer>
                  <LabelInputElement
                    type="checkbox"
                    id="show_password"
                    checkbox
                    onClick={this.onClickShowPassword}
                  />
                  <ShowPasswordLabelElement
                    htmlFor="show_password"
                    darkMode={darkMode}
                  >
                    Show Password
                  </ShowPasswordLabelElement>
                </CheckBoxContainer>
                <CustomLoginButton type="submit">Login</CustomLoginButton>
                <ErrorMessage>{showErrorMsg && `*${errorMsg}`}</ErrorMessage>
              </LoginFormCardContainer>
              <Popup
                trigger={
                  <NoteCustomButton darkMode={darkMode}>
                    Login Credentials
                  </NoteCustomButton>
                }
                className="pop_menu_content"
                modal
              >
                {close => (
                  <NoteContainer darkMode={darkMode}>
                    <CloseButton
                      onClick={() => close()}
                      type="button"
                      small="true"
                    >
                      <MdClose
                        size={25}
                        color={darkMode ? '#ffffff' : '#000000'}
                      />
                    </CloseButton>
                    <NoteContainer
                      className="note_container"
                      darkMode={darkMode}
                    >
                      <NoteText className="note_heading" darkMode={darkMode}>
                        Note:
                      </NoteText>
                      <NoteText darkMode={darkMode}>
                        To practice authentication and authorization, i used
                        login api from nxtwave company . So to test this
                        application
                      </NoteText>
                      <NoteText darkMode={darkMode}>username : rahul</NoteText>
                      <NoteText darkMode={darkMode}>
                        password : rahul@2021
                      </NoteText>
                      <NoteText greet="true" darkMode={darkMode}>
                        thanks for visiting
                      </NoteText>
                    </NoteContainer>
                  </NoteContainer>
                )}
              </Popup>
            </LoginRouteBackgroundContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Login
